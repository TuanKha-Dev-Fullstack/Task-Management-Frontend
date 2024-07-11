// src/hooks/useApi.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', body = null, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setError(null);
        try {
            const config = {
                url,
                method,
                data: body,
                ...options,
            };
            const response = await axios(config);
            setData(response.data);
        } catch (err) {
            setError(err);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error };
};

export default useApi;
