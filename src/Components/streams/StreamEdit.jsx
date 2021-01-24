import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const onSubmit = (FormValues) => {
    props.editStream(props.match.params.id, FormValues);
  };
  return (
    <>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={_.pick(props.stream, "title", "description")}
      />
    </>
  );
};
const mapStateToProps = (state, getState) => {
  return { stream: state.streams[getState.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
