import fetch from 'node-fetch';

/**
 * Make http/ https request with timeout and retries
 * 
 * @param {httpOptions} options Standard options for http.request
 * @param {number} timeout timeout in milliseconds
 * @param {number} retryCount number of retries
 * @returns http response
 */
export default async (url, options) => {
    const { retryCount = 1, ...requestOptions } = options;
    let currentRetryCount = 1;
    while (currentRetryCount <= retryCount) {
        try {
            const response = await fetch(url, requestOptions);
            // return raw response
            return response;
        } catch (error) {
            // return in last iteration
            if (currentRetryCount === retryCount) return error;
            currentRetryCount++;
        }
    }
};