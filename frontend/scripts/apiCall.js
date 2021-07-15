const baseApiUrl = 'http://localhost:3000';

const apiCall = async (apiUrl, method, body, token) => {
    token = typeof(token) !== 'undefined' ? token : ''; 
    try {
        const response = await fetch(apiUrl, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}