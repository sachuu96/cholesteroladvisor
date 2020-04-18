import {
  registerGlobalServices,
  serviceManager
} from "../helpers/services/manager";
import NavigationService from "./NavigationService";
import { DietPlanService } from "./DietPlanService";
import { ExcPlanService } from "./ExcPlanService";
import { StressPlanService } from "./StressPlanService";
import { ProfileService } from "./ProfileService";


export const registerServices = options => {
  registerGlobalServices(options);

  serviceManager.register("NavigationService", () => {
    return new NavigationService();
  });

  serviceManager.register("DietPlanService", serviceManager => {
    let api = serviceManager.get("ApiService");
    return new DietPlanService(api);
  });

  serviceManager.register("ExcPlanService", serviceManager => {
    let api = serviceManager.get("ApiService");
    return new ExcPlanService(api);
  });

  serviceManager.register("StressPlanService", serviceManager => {
    let api = serviceManager.get("ApiService");
    return new StressPlanService(api);
  });

  serviceManager.register("ProfileService", serviceManager => {
    let api = serviceManager.get("ApiService");
    return new ProfileService(api);
  });
}

export { serviceManager };
