// @flow
import type { ApiServiceInterface } from "../helpers/services/ApiServiceInterface";

export class DietPlanService {
  api: ApiServiceInterface;

  endpoint: string = "/food";

  constructor(apiService: ApiServiceInterface) {
    this.api = apiService;
  }

  getFoodPattern(filters: Object = {}) {
    return this.api.get(this.endpoint, filters);
  }

  saveCalorieIntake(payload: Object) {
    return this.api.post(this.endpoint, payload);
  }

  getNetCalorieIntake(filters: Object) {
    return this.api.get(`${this.endpoint}/calorie`, filters);
  }
}
