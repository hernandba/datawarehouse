const baseApiUrl = 'http://localhost:3000';

const apiCall = async (apiUrl, method, token, body) => {

    const fetchParams = typeof (body) !== 'undefined' ? 
        {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `BEARER ${token}`
            }
        } 
        :
        {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `BEARER ${token}`
            }
        };
    try {
        const response = await fetch(apiUrl, fetchParams);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}