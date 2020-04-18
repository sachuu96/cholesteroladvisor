// @flow
import type { ApiServiceInterface } from "../helpers/services/ApiServiceInterface";
import axios from 'axios';

export class ProfileService {
    api: ApiServiceInterface;

    endpoint: string = "/profile";

    constructor(apiService: ApiServiceInterface) {
        this.api = apiService;
    }

    postRiskFactors(filters: Object = {}) {
        return axios.post('http://localhost:5000/result', filters);
    }
}


