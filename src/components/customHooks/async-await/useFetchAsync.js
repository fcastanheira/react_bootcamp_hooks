import {useState, useEffect } from 'react';

export const useFetchAsync = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
         const fetchData = async () => {
            const response = await fetch(url);
            const dataResponse = await response.json();
            setData(dataResponse);

        }

        fetchData();
    }, [url]);

    return data;
}
