import {
  GET_STRESS_PLAN_INIT,
  GET_STRESS_PLAN_SUCCESS,
  GET_STRESS_PLAN_FAILURE,
  GET_DETECTED_FACE_SUCCESS
} from "../actionTypes/stressPlan";

function getStressPlanInit() {
  return {
    type: GET_STRESS_PLAN_INIT
  };
}

function getStressPlanSuccess(payload) {
  return {
    type: GET_STRESS_PLAN_SUCCESS,
    payload
  };
}

function getStressPlanFailure() {
  return {
    type: GET_STRESS_PLAN_FAILURE
  };
}

export function getStressPlan(filters) {
  return (dispatch, getState, serviceManager) => {
    dispatch(getStressPlanInit());

    let stressPlanService = serviceManager.get("StressPlanService");

    stressPlanService
      .getStressPlan(filters)
      .then(response => {
        dispatch(getStressPlanSuccess(response.data));
      })
      .catch(() => dispatch(getStressPlanFailure()));
  };
}

function getDetectedFaceSuccess(payload) {
  return {
    type: GET_DETECTED_FACE_SUCCESS,
    payload
  };
}

export function getDetectedFace({ detectedType }) {
  return (dispatch, getState, serviceManager) => {
    dispatch(getDetectedFaceSuccess({ detectedType }));
  };
}
