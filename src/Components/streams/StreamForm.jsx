import React from "react";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "55ch",
    },
  },
}));

const renderInput = ({ input, label, meta }) => {
  return (
    <div className="field">
      <TextField
        style={{ width: "80%" }}
        variant="outlined"
        label={label}
        {...input}
      />
      {meta.touched && <div style={{ color: "red" }}>{meta.error}</div>}
    </div>
  );
};

const StreamForm = (props) => {
  const onSubmit = (FormValues) => {
    props.onSubmit(FormValues);
  };

  const classes = useStyles();
  return (
    <>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        className={classes.root}
        style={{ paddingLeft: "30%", marginTop: "10%" }}
        noValidate
        autoComplete="off"
      >
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <Button
          type="submit"
          style={{ width: "35%" }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </>
  );
};
const validate = (formValues) => {
  const errors = [];
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamForm);
