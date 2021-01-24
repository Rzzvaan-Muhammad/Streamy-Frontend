import React, { useEffect } from "react";
import Modal from "../Model";
import { connect } from "react-redux";
import History from "../../history";

import { fetchStream, deleteStream } from "./../../actions/index";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const onDelete = () => {
    props.deleteStream(props.match.params.id);
    History.push("/");
  };
  return (
    <>
      <Modal title={props.stream.title} onDelete={onDelete} />
    </>
  );
};
const mapStateToProps = (state, getProps) => {
  return { stream: state.streams[getProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
