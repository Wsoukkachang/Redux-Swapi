// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const PEOPLE_FETCH = "PEOPLE_FETCH";
export const PEOPLE_SUCCESS = "PEOPLE_SUCCESS";
export const PEOPLE_FAILURE = "PEOPLE_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getPeople = () => dispatch => {
    dispatch({type: PEOPLE_FETCH});
    axios.get(`https://swapi.co/api/people`)
       .then(res => dispatch({type: PEOPLE_SUCCESS, payload: res.data.results}))
       .catch(err => dispatch({type: PEOPLE_FAILURE, payload: err}));
    }