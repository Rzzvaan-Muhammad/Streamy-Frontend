import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  const onSubmit = (FormValues) => {
    props.createStream(FormValues);
  };

  return (
    <>
      <StreamForm onSubmit={onSubmit} />
    </>
  );
};

export default connect(null, { createStream })(StreamCreate);
