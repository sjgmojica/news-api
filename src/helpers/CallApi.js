const request = require('request-promise');
import ApiError from './ApiError';

class CallApi {

    static async get (endpoint, queryStr) {
        
        const options = {
            uri: queryStr ? `${process.env.NEWS_BASE_URL}${endpoint}?${queryStr}` : `${process.env.NEWS_BASE_URL}${endpoint}`,
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${process.env.NEWS_API_KEY}`
            },
            json: true
        };

        request(options)
            .then(function(body) {
                console.log('@helpers.CallApi.body ::', body);
                if (body.status === 'error') throw new ApiError(body);
                return body;
            })
            .catch(function (err) {
                console.log('@helpers.CallApi.err ::', err);
                throw err;
            });
    }

}

export default CallApi;