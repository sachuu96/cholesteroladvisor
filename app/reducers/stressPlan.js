// @flow
import {
  GET_STRESS_PLAN_INIT,
  GET_STRESS_PLAN_SUCCESS,
  GET_STRESS_PLAN_FAILURE,
  GET_DETECTED_FACE_SUCCESS
} from "../actionTypes/stressPlan";

export type Action = {
  type: string,
  payload: Object
};

export type StressPlanStateType = {
  loading: boolean,
  stressPlan: {
    activityHeader: string,
    activityDescription: string
  },
  index: string,
  isError: boolean,
  detectedType: string
};

const initialState: StressPlanStateType = {
  loading: false,
  stressPlan: {
    activityHeader: "",
    activityDescription: ""
  },
  index: "1",
  isError: false,
  detectedType: ""
};

function getStressPlanInit(state) {
  return {
    ...state,
    loading: true
  };
}

function getStressPlanSuccess(
  state,
  { activityHeader, activityDescription, index }
) {
  return {
    ...state,
    loading: false,
    isError: false,
    stressPlan: { activityHeader, activityDescription },
    index
  };
}

function getStressPlanFailure(state) {
  return {
    ...state,
    loading: false,
    isError: true
  };
}

function getDetectedFaceSuccess(state, { detectedType }) {
  return {
    ...state,
    detectedType
  };
}

const reducer = (
  state: StressPlanStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case GET_STRESS_PLAN_INIT:
      return getStressPlanInit(state);
    case GET_STRESS_PLAN_SUCCESS:
      return getStressPlanSuccess(state, payload);
    case GET_STRESS_PLAN_FAILURE:
      return getStressPlanFailure(state);
    case GET_DETECTED_FACE_SUCCESS:
      return getDetectedFaceSuccess(state, payload);
    default:
      return state;
  }
};

export default reducer;
