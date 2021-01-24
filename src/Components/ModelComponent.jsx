import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import History from "../history";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[20],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const onClick = () => {
    History.push("/");
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open="true"
        onClick={onClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in="true">
          <div className={classes.paper} onClick={(e) => e.stopPropagation()}>
            <h2 id="transition-modal-title">Are You sure!</h2>
            <p id="transition-modal-description">
              Your stream <b style={{ color: "red" }}>{props.title}</b> will be
              removed permanently.
            </p>
            <Button onClick={onClick} variant="outlined" color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={props.onDelete}
            >
              Delete
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
