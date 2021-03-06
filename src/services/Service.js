import CallApi from '../helpers/CallApi';

class Service {
    
    constructor() {
        this.getAll = this.getAll.bind(this);
    }

    /**
     * @description : abstract function for getAll
     * @param {*} path 
     * @param {*} query 
     */
    async getAll(path, query) {

        try {
                    
            // Set variables
            let { page, pageSize } = query;
            page = page ? page : 1;
            pageSize = pageSize ? pageSize : 20

            let queryParams = {
                page,
                pageSize,
                ...query
            }
            
            // Parse path eg. ['', api, news, top-headlines]. it will get the last name in the path
            const endpoint = path.split('/').splice(-1,1).toString();

            // Fetch news 
            const {
                articles,
                sources
            } = await CallApi.get(endpoint, queryParams);
      
            // Response
            return {
                statusCode: 200,
                data: articles || sources,
                meta: {
                    page: Number(queryParams.page),
                    pageSize: Number(queryParams.pageSize)
                }
            }
            
           
        } catch (errors) {
            console.log('@Service.getAll ::', errors);
            return {
                error: true,
                statusCode: 500,
                errors
            }
        }
    }
}

export default Service;
