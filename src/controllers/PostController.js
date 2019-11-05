import Controller from './Controller';
import NewsService from './../services/NewsService';
const newsService = new NewsService ();

class PostController extends Controller {

    constructor(service) {
        super(service)
    }
}

export default new PostController(newsService);

