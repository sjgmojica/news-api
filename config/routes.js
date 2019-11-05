import PostController from './../src/controllers/PostController';

export default (app) => {
    // Routes
    app.get('/news/headlines', PostController.getAll);
    app.get('/news/everything', PostController.getAll);
    app.get('/news/sources', PostController.getAll);
    app.get('*', (req, res) => {
        res.status(404).json({message: 'Not Found'})
    });

}