import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export function useFetchSelector(selector, fetchFunction, payload, dependencies = []) {

    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFunction(payload));
    }, [fetchFunction, dispatch, payload, ...dependencies]);


    return state;
}