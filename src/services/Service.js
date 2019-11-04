class Servvice {
    
    async getAll(query) {
        let { page, pageSize } = query;
        page = page ? Number(page) : 1;
        pageSize = pageSize ? Number(pageSize) : 10

        try {

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
