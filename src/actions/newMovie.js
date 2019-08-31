import {API_BASE} from '../config/env';
import axios from 'axios';


export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULFILLED="NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED="NEW_MOVIE_REJECTED";

export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_FULFILLED="FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED="FETCH_MOVIE_REJECTED";
export function onNewMoviesSubmit({firstName,lastName}){  
    return dispatch=>{
        dispatch({
            type:"NEW_MOVIE",
            payload: axios.post("http://localhost:44320/api/Customers",{
                firstName,
                lastName,
                stateId: 30
            })  
            
        })
    }
}
export function fetchMovie(id){  
    return dispatch=>{
        dispatch({
            type:"FETCH_MOVIE",
            payload: axios.get(`${API_BASE}Customers/${id}`)
            .then(result=>result.data)  
            
        })
    }
}