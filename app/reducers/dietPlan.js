// @flow
import {
  GET_FOOD_PATTERN_INIT,
  GET_FOOD_PATTERN_SUCCESS,
  GET_FOOD_PATTERN_FAILURE,
  SAVE_CALORIE_INTAKE_INIT,
  SAVE_CALORIE_INTAKE_SUCCESS,
  SAVE_CALORIE_INTAKE_FAILURE,
  GET_NET_CALORIE_INTAKE_INIT,
  GET_NET_CALORIE_INTAKE_SUCCESS,
  GET_NET_CALORIE_INTAKE_FAILURE,
  GET_DETECTED_FOOD_SUCCESS
} from "../actionTypes/dietPlan";

export type Action = {
  type: string,
  payload: Object
};

export type DietPlanStateType = {
  loading: boolean,
  foodPattern: Array<string>,
  patternIndex: string,
  isError: boolean,
  calorieAmount: string,
  isSaveSuccess: boolean,
  netCalorieIntake: number,
  detectedType: string,
  detectedCalorie: string
};

const initialState: DietPlanStateType = {
  loading: false,
  foodPattern: [],
  isError: false,
  patternIndex: "1",
  calorieAmount: "0",
  isSaveSuccess: false,
  netCalorieIntake: 0,
  detectedType: "",
  detectedCalorie: ""
};

function getFoodPatternInit(state) {
  return {
    ...state,
    loading: true
  };
}

function getFoodPatternSuccess(state, { foodPattern, index, calorieAmount }) {
  return {
    ...state,
    loading: false,
    isError: false,
    foodPattern,
    calorieAmount,
    patternIndex: index
  };
}

function getFoodPatternFailure(state) {
  return {
    ...state,
    loading: false,
    isError: true
  };
}

function saveCalorieIntakeInit(state) {
  return {
    ...state,
    loading: true,
    isSaveSuccess: false,
    isError: false
  };
}

function saveCalorieIntakeSuccess(state) {
  return {
    ...state,
    loading: false,
    isSaveSuccess: true,
    isError: false
  };
}

function saveCalorieIntakeFailure(state) {
  return {
    ...state,
    loading: false,
    isSaveSuccess: false,
    isError: true
  };
}

function getNetCalorieIntakeInit(state) {
  return {
    ...state,
    loading: true
  };
}

function getNetCalorieIntakeSuccess(state, { data }) {
  return {
    ...state,
    loading: false,
    netCalorieIntake: data
  };
}

function getNetCalorieIntakeFailure(state) {
  return {
    ...state,
    loading: false,
    netCalorieIntake: 0
  };
}

function getDetectedFoodSuccess(state, { detectedType, detectedCalorie }) {
  return {
    ...state,
    detectedType,
    detectedCalorie
  };
}

const reducer = (
  state: DietPlanStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case GET_FOOD_PATTERN_INIT:
      return getFoodPatternInit(state);
    case GET_FOOD_PATTERN_SUCCESS:
      return getFoodPatternSuccess(state, payload);
    case GET_FOOD_PATTERN_FAILURE:
      return getFoodPatternFailure(state);
    case SAVE_CALORIE_INTAKE_INIT:
      return saveCalorieIntakeInit(state);
    case SAVE_CALORIE_INTAKE_SUCCESS:
      return saveCalorieIntakeSuccess(state);
    case SAVE_CALORIE_INTAKE_FAILURE:
      return saveCalorieIntakeFailure(state);
    case GET_NET_CALORIE_INTAKE_INIT:
      return getNetCalorieIntakeInit(state);
    case GET_NET_CALORIE_INTAKE_SUCCESS:
      return getNetCalorieIntakeSuccess(state, payload);
    case GET_NET_CALORIE_INTAKE_FAILURE:
      return getNetCalorieIntakeFailure(state);
    case GET_DETECTED_FOOD_SUCCESS:
      return getDetectedFoodSuccess(state, payload);
    default:
      return state;
  }
};

export default reducer;
