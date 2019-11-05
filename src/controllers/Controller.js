import Service from '../services/Service';
class Controller {

    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
    }
    async getAll(req, res) {
        console.log(this.service);
        return res.status(200).send(await this.service.getAll(req.query));
        // return res.status(200).send(await Service.getAll(req.query));
    }
}

export default Controller;