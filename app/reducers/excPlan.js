// @flow
import {
  GET_EXC_PATTERN_INIT,
  GET_EXC_PATTERN_SUCCESS,
  GET_EXC_PATTERN_FAILURE,
  POST_EXC_PATTERN_INIT,
  POST_EXC_PATTERN_SUCCESS,
  POST_EXC_PATTERN_FAILURE,
  POST_LEG_RESULTS_INIT,
  POST_LEG_RESULT_SUCCESS,
  POST_LEG_RESULT_FAILURE
} from "../actionTypes/excPlan";
//import { stringify } from "qs";

export type Action = {
  type: string,
  payload: Object
};

export type ExcPlanStateType = {
  loading: boolean,
  day: string,
  timeSlot: string,
  ex1: string,
  ex2: string,
  isError: boolean
};

const initialState: ExcPlanStateType = {
  loading: false,
  day: "",
  timeSlot: "",
  ex1: "",
  ex2: "",
  isError: false
};

///do other changes if there any
function getExcPatternInit(state) {
  return {
    ...state,
    loading: true
  };
}

function getExcPatternSuccess(state, { day, timeSlot, ex1, ex2 }) {
  return {
    ...state,
    loading: false,
    isError: false,
    day: day,
    timeSlot: timeSlot,
    ex1: ex1,
    ex2: ex2
  };
}

function getExcPatternFailure(state) {
  return {
    ...state,
    loading: false,
    isError: true
  };
}

function postExcPatterSuccess(state, { day, timeSlot, ex1, ex2 }) {
  return {
    ...state,
    day,
    timeSlot,
    ex1,
    ex2,
    loading: false
  };
}

const reducer = (
  state: ExcPlanStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case GET_EXC_PATTERN_INIT:
      return getExcPatternInit(state);
    case GET_EXC_PATTERN_SUCCESS:
      return getExcPatternSuccess(state, payload);
    case GET_EXC_PATTERN_FAILURE:
      return getExcPatternFailure(state);
    case POST_EXC_PATTERN_SUCCESS:
      return postExcPatterSuccess(state, payload);
    default:
      return state;
  }
};

export default reducer;
