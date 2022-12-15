export const getApiConfig = link => {

    const defaultLink = "https://api.testnet.buxano.com/api/v1";

    const config = {
        method: 'get',
        url: `${defaultLink}${link}`,
        headers: {
            'X-BXN-APIKEY': 'O3yWmijw2p3TO2my54wOc6zDZkUecB1z'
        }
    };

    return config;
}
