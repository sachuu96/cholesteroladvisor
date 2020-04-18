// @flow
export type Action = {
  type: string,
  payload: Object
};

export type AuthStateType = {
  loading: boolean,
  notification: null | String,
  user: string
};

const initialState: AuthStateType = {
  loading: false,
  notification: null,
  user: "abc-123-1"
};

const reducer = (
  state: AuthStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
