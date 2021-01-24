import {
  createStreamKey,
  fetchStreamsKey,
  fetchStreamKey,
  deleteStreamKey,
  editStreamKey,
} from "../actions/types";
import _ from "lodash";
const StreamReducer = (state = {}, action) => {
  switch (action.type) {
    case fetchStreamsKey:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case createStreamKey:
      return { ...state, [action.payload.id]: action.payload };
    case fetchStreamKey:
      return { ...state, [action.payload.id]: action.payload };
    case editStreamKey:
      return { ...state, [action.payload.id]: action.payload };
    case deleteStreamKey:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default StreamReducer;
