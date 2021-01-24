import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
const StreamShow = (props) => {
  const createRef = useRef(null);
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    let player = null;
    if (!props.stream) {
      return;
    } else {
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${props.match.params.id}.flv`,
      });
      player.attachMediaElement(createRef.current);
      player.load();
    }
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <>
      {props.stream ? (
        <div>
          <video
            ref={createRef}
            src=""
            style={{ width: "100%" }}
            controls
          ></video>
          <h3>{props.stream.title}</h3>
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};

const mapStateToProps = (state, getProps) => {
  return { stream: state.streams[getProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
