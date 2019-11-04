import PostController from './../src/controllers/PostController';

export default (app) => {
    // Get Routes
    // app.get('/news/headlines', PostController.getAll);
    app.get(`/news/headlines`, (req, res, next) => {
        res.json('headlines');
    });

    // app.get('/news/everything', PostController.getAll);
    app.get(`/news/everything`, (req, res, next) => {
        res.json('everything');
    });

    // app.get('/news/sources', PostController.getAll);
    app.get(`/news/sources`, (req, res, next) => {
        res.json('sources');
    });
}