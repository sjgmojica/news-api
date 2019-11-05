import Service from '../services/Service';
class Controller {

    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
    }

    /**
     * @description : get all function for every controller
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res) {
        return res.status(200).send(await this.service.getAll(req.path, req.query));
    }
}

export default Controller;