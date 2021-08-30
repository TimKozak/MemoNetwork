import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";

// SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// GET TECHS FOR MODAL
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// ADD TECH TO THE LIST
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// DELETE TECH FROM THE LIST
export const deleteTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/techs/${tech.id}`, {
      method: "DELETE",
    });
    await res.json();

    dispatch({
      type: DELETE_TECH,
      payload: tech,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
