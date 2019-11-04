class Controller {
    
    constructor(service) {
        this.service = servvice;
        this.getAll = this.getAll.bind(this);
    }

    async fetchAll(req, res) {
        return res.status(200).send(await this.service.getAll(req.query));
    }
}

export default Controller;