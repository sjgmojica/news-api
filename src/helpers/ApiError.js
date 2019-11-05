class ApiError extends Error {
    constructor(err) {
        super();
        this.name = err.code;
        this.message = err.message
    }
}

export default ApiError;