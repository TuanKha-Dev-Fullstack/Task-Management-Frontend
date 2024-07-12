import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', body = null) => {
    // define state
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // call api
    useEffect(() => {
        setLoading(true);
        const callApi = async () => {
            try {
                const response = await axios({
                    method: method,
                    url: url,
                    data: body
                });
                const res = await response?.data;
                setData(res);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        callApi();
    }, [url, method, body]);
    return { data, error, loading };
};

export default useApi;
