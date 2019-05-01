import { PEOPLE_FETCH, PEOPLE_SUCCESS, PEOPLE_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    
    case PEOPLE_FETCH:
      return {
        ...state,
        fetching: true,
        error: null
      }

    case PEOPLE_SUCCESS:
      console.log("Success", action.payload)
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null
      }

    case PEOPLE_FAILURE:
      return {
        ...state,
        fetching:false,
        error: null
      }

    default:
      return state;
  }
};
