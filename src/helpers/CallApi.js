const request = require('request-promise');
const qs = require('query-string');
import ApiError from './ApiError';

class CallApi {

    /**
     * @description: function to call news org
     * @param {*} endpoint 
     * @param {*} queryStr 
     */
    static async get (endpoint, queryStr) {
   
        const query = qs.stringify(queryStr);
        const url = query ? `${process.env.NEWS_BASE_URL}/${endpoint}?${query}` : `${process.env.NEWS_BASE_URL}/${endpoint}`;
        const options = {
            uri: url,
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${process.env.NEWS_API_KEY}`
            },
            json: true
        };

        return request(options)
            .then(function(body) {
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