import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export function useFetchSelector(selector, fetchFunction, payload) {

    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFunction(payload));
    }, []);


    return state;
}