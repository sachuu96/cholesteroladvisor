import {
    POST_RISK_FACTORS_INIT,
    POST_RISK_FACTORS_SUCCESS,
    POST_RISK_FACTORS_FAILURE
} from "../actionTypes/profile";

function postRiskFactorsInit() {
    return {
        type: POST_RISK_FACTORS_INIT
    };
}

function postRiskFactorsSuccess(payload) {
    return {
        type: POST_RISK_FACTORS_SUCCESS,
        payload
    };
}

function postRiskFactorsFailure() {
    return {
        type: POST_RISK_FACTORS_FAILURE
    };
}

export function postRiskFactors(filters) {
    return (dispatch, getState, serviceManager) => {
        dispatch(postRiskFactorsInit());

        let ProfileService = serviceManager.get("ProfileService");

        ProfileService.postRiskFactors(filters)
            .then(response => {

                dispatch(postRiskFactorsSuccess(response.data.results[0]))
            })

            .catch(() => dispatch(postRiskFactorsFailure()));
    };
}
