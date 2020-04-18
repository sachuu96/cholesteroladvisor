// @flow
import type { ApiServiceInterface } from "../helpers/services/ApiServiceInterface";

export class StressPlanService {
  api: ApiServiceInterface;

  endpoint: string = "/stress";

  constructor(apiService: ApiServiceInterface) {
    this.api = apiService;
  }

  getStressPlan(filters: Object = {}) {
    return this.api.get(this.endpoint, filters);
  }
}
