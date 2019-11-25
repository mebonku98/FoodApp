import {useEffect, useState} from 'react';
import networkApi from '../api/networkApi'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await networkApi.get('/search', {
                params: {
                    entity_id: 5413,
                    entity_type: 'subzone',
                    count: 50,
                    q: searchTerm
                }
            });
            setResults(response.data.restaurants)
            }
            catch (err) {
                setErrorMessage('Something went wrong')
            }
    }
    useEffect(() => {
        searchApi('');
    }, []);


    return [searchApi, results, errorMessage];
};