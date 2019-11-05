class Service {
    
    constructor() {
        this.getAll = this.getAll.bind(this);
    }

    async getAll(query) {
        let { page, pageSize } = query;
        page = page ? Number(page) : 1;
        pageSize = pageSize ? Number(pageSize) : 10

        try {

            return {
                statusCode: 200,
                data: 'success',
                meta: {
                    total : 1
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
