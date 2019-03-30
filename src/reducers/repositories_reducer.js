import { GET_REPOSITORIES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_REPOSITORIES:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
};
