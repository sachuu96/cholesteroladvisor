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

function getFoodPatternInit() {
  return {
    type: GET_FOOD_PATTERN_INIT
  };
}

function getFoodPatternSuccess(payload) {
  return {
    type: GET_FOOD_PATTERN_SUCCESS,
    payload
  };
}

function getFoodPatternFailure() {
  return {
    type: GET_FOOD_PATTERN_FAILURE
  };
}

export function getFoodPattern(filters) {
  return (dispatch, getState, serviceManager) => {
    dispatch(getFoodPatternInit());

    let DietPlanService = serviceManager.get("DietPlanService");

    DietPlanService.getFoodPattern(filters)
      .then(response => dispatch(getFoodPatternSuccess(response.data)))
      .catch(() => dispatch(getFoodPatternFailure()));
  };
}

function saveCalorieIntakeInit() {
  return {
    type: SAVE_CALORIE_INTAKE_INIT
  };
}

function saveCalorieIntakeSuccess() {
  return {
    type: SAVE_CALORIE_INTAKE_SUCCESS
  };
}

function saveCalorieIntakeFailure() {
  return {
    type: SAVE_CALORIE_INTAKE_FAILURE
  };
}

export function saveCalorieIntake(payload) {
  return (dispatch, getState, serviceManager) => {
    dispatch(saveCalorieIntakeInit());

    let DietPlanService = serviceManager.get("DietPlanService");

    DietPlanService.saveCalorieIntake(payload)
      .then(() => dispatch(saveCalorieIntakeSuccess()))
      .catch(() => dispatch(saveCalorieIntakeFailure()));
  };
}

function getNetCalorieIntakeInit() {
  return {
    type: GET_NET_CALORIE_INTAKE_INIT
  };
}

function getNetCalorieIntakeSuccess(payload) {
  return {
    type: GET_NET_CALORIE_INTAKE_SUCCESS,
    payload
  };
}

function getNetCalorieIntakeFailure() {
  return {
    type: GET_NET_CALORIE_INTAKE_FAILURE
  };
}

export function getNetCalorieIntake(filters) {
  return (dispatch, getState, serviceManager) => {
    dispatch(getNetCalorieIntakeInit());

    let DietPlanService = serviceManager.get("DietPlanService");

    DietPlanService.getNetCalorieIntake(filters)
      .then(response => dispatch(getNetCalorieIntakeSuccess(response)))
      .catch(() => dispatch(getNetCalorieIntakeFailure()));
  };
}

function getDetectedFoodSuccess(payload) {
  return {
    type: GET_DETECTED_FOOD_SUCCESS,
    payload
  };
}

export function getDetectedFood({ detectedType, detectedCalorie }) {
  return (dispatch, getState, serviceManager) => {
    dispatch(getDetectedFoodSuccess({ detectedType, detectedCalorie }));
  };
}
