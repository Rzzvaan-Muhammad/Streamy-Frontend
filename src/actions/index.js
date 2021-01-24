import streamsAPI from "../Apis/streams";
import History from "../history";
import {
  signedInKey,
  signedOutKey,
  createStreamKey,
  fetchStreamsKey,
  fetchStreamKey,
  deleteStreamKey,
  editStreamKey,
} from "./types";

export const signedIn = (userId, userName) => {
  return {
    type: signedInKey,
    payload: {
      userId,
      userName,
    },
  };
};

export const signedOut = () => {
  return {
    type: signedOutKey,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().Auth;
  const { data } = await streamsAPI.post("/streams", { ...formValues, userId });

  dispatch({
    type: createStreamKey,
    payload: data,
  });
  History.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streamsAPI.get("/streams");

  dispatch({
    type: fetchStreamsKey,
    payload: data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const { data } = await streamsAPI.get(`/streams/${id}`);

  dispatch({
    type: fetchStreamKey,
    payload: data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streamsAPI.delete(`/streams/${id}`);

  dispatch({
    type: deleteStreamKey,
    payload: id,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const { data } = await streamsAPI.patch(`/streams/${id}`, formValues);

  dispatch({
    type: editStreamKey,
    payload: data,
  });
  History.push("/");
};
