// @flow
import {
    POST_RISK_FACTORS_INIT,
    POST_RISK_FACTORS_SUCCESS,
    POST_RISK_FACTORS_FAILURE
} from "../actionTypes/profile";

export type Action = {
    type: string,
    payload: Object
};

export type ProfileStateType = {
    loading: boolean,
    ped_result: number,
    isError: boolean
};

const initialState: ProfileStateType = {
    loading: false,
    ped_result: 0,
    isError: false,
};

function postRiskFactorsInit(state) {
    return {
        ...state,
        loading: true
    };
}

function postRiskFactorsSuccess(state, { ped_result }) {
    console.log(ped_result);
    return {
        ...state,
        loading: false,
        isError: false,
        ped_result,

    };
}

function postRiskFactorsFailure(state) {
    return {
        ...state,
        loading: false,
        isError: true
    };
}

const reducer = (
    state: ProfileStateType = initialState,
    { type, payload = {} }: Action
) => {
    switch (type) {
        case POST_RISK_FACTORS_INIT:
            return postRiskFactorsInit(state);
        case POST_RISK_FACTORS_SUCCESS:
            return postRiskFactorsSuccess(state, payload);
        case POST_RISK_FACTORS_FAILURE:
            return postRiskFactorsFailure(state);
        default:
            return state;
    }
};

export default reducer;
