import PostController from './../src/controllers/PostController';

export default (app) => {
    // Routes
    app.get('/api/news/sources', PostController.getAll);
    app.get('/api/news/top-headlines', PostController.getAll);
    app.get('/api/news/everything', PostController.getAll);
    app.get('*', (_req, res) => {
        res.status(404).json({message: 'Not Found'})
    });

}