import axios from 'axios';

export default axios.create ({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key':'053adf1bfe2a38d4daea6597bd7a1fc6'
    }
})