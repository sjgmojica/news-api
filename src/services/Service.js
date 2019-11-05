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
        
        let { page, pageSize } = query;
        page = page ? page : 1;
        pageSize = pageSize ? pageSize : 20

        let queryParams = {
            page,
            pageSize,
            ...query
        }
        
        const endpoint = path.split('/').splice(-1,1).toString();
       
        try {

            // Fetch news 
            const {
                articles
            } = await CallApi.get(endpoint, queryParams);
      
            // Response
            return {
                statusCode: 200,
                data: articles,
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
