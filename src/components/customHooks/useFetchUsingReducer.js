import {useReducer, useEffect} from 'react';


const initialState = {
    loading: '',
    error: '',
    data: [],
}

function fetchReducer(state, action) {
    switch (action.type) {
        case 'DATA_FETCH_BEGIN':
            return {...state};
        case 'DATA_FETCH_SUCCESS':
            return {...state, data: action.payload}
        case 'DATA_FETCH_FAILURE':
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export const useFetchUsingReducer = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        dispatch({type: 'DATA_FETCH_BEGIN'});

        fetch(url)
            .then(response => {
                debugger;
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                debugger;
                dispatch({type: 'DATA_FETCH_SUCCESS', payload: data});
            })
            .catch(error => {
                dispatch({
                    type: 'DATA_FETCH_FAILURE',
                    payload: 'The data could not be fetched',
                });
            });
    }, [url]);

    return state;
}


