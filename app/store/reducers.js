import { combineReducers } from "redux";

import auth, { type AuthStateType } from "../reducers/auth";
import dietPlan, { type DietPlanStateType } from "../reducers/dietPlan";
import excPlan, { type ExcPlanStateType } from "../reducers/excPlan";
import stressPlan, { type StressPlanStateType } from "../reducers/stressPlan";
import profile, { type ProfileStateType } from "../reducers/profile";


export type ApplicationState = {
  auth: AuthStateType,
  dietPlan: DietPlanStateType,
  excPlan: ExcPlanStateType,
  stressPlan: StressPlanStateType,
  profile: ProfileStateType

};

export default () =>
  combineReducers({
    auth,
    dietPlan,
    excPlan,
    stressPlan,
    profile
  });
