import {
  SET_LOADING,
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
} from "../actions/types";

// Set this inital state object as defult prop for reducer
const initialState = {
  techs: null,
  loading: false,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => action.payload.id !== tech.id),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default techReducer;
