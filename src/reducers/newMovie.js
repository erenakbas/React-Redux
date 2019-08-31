import {
    NEW_MOVIE_PENDING,
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED
} from '../actions/newMovie';
const initialState={
    fetching: false,
    done:false, 
    error:{},
    movie:{}
};
export default (state=initialState,action) => { 
    switch(action.type){
        case NEW_MOVIE_PENDING:
			return {
				...state,
				fetching: true
			};
        case NEW_MOVIE_FULFILLED:
        return{
            ...state,
            movies: action.payload,
            fetching: false,
            done:true
        }
        case NEW_MOVIE_REJECTED:
        return{
            ...state,
            error: action.payload ,
            fetching: false 
        }
        //FETCH MOVIE
        case FETCH_MOVIE_PENDING:
        return {
            ...state
        };
        case FETCH_MOVIE_FULFILLED:
        return{
            ...state, 
            movie:action.payload
        }
        case FETCH_MOVIE_REJECTED:
        return{
            ...state, 
        }
        default:
        return state;
    }
}