import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', body = null) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const callApi = useCallback(async () => {
        setLoading(true);
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
    }, [url, method, body]);
    useEffect(() => {
        callApi();
    }, [callApi]);
    return { data, error, loading, refetch: callApi };
};

export default useApi;
