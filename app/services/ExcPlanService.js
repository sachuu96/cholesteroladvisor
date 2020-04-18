// @flow
import type { ApiServiceInterface } from "../helpers/services/ApiServiceInterface";
import axios from "axios";

export class ExcPlanService {
  api: ApiServiceInterface;

  endpoint: string = "/exc";

  constructor(apiService: ApiServiceInterface) {
    this.api = apiService;
  }

  getExcPattern(filters: Object = {}) {
    return axios.get("http://192.168.8.102:5000/model");
  }

  postExcPattern(filters: Object = {}) {
    return axios.post("http://192.168.8.102:5000/update", filters);
  }

  //relevent
  postAbsResult(payload: Object = {}) {
    return axios.post("http://192.168.8.100:5000/getabsshedule", payload);
  }

  postLegResult(payload: Object = {}) {
    return axios.post("http://192.168.8.100:5000/getlegsshedule", payload);
  }

  postArmResult(payload: Object = {}) {
    return axios.post("http://192.168.8.100:5000/getarmsshedule", payload);
  }

  //connect with node js backend
  postWorkout(payload: Object = {}) {
    return axios.post("http://192.168.8.100:3000/workout/add", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getWorkoutForCertainDay(day: string, category: string) {
    return axios.get(
      "http://192.168.8.100:3000/workout/" + day + "/" + category,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  getMixedWorkOut(day: string) {
    return axios.get("http://192.168.8.100:3000/mixed/" + day, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getPastFitnessValuePerCategory(category: string) {
    return axios.get("http://192.168.8.100:3000/fitness/" + category, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
