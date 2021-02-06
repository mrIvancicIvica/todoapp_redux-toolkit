import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import { saveTodo } from "../../redux/TodoSlice";
import uuid from "uuid/dist/v4";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  //materialui
  const classes = useStyles();

  //formik
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: ({ task }) => {
      dispatch(
        saveTodo({
          item: `${task}`,
          id: uuid(),
          completed: false,
        })
      );
      console.log(`${task}`);

      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        //materiaUi dio
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        //formik dio
        value={values.task}
        onChange={handleChange}
        name='task'
        type='text'
      />{" "}
      <br />
      <Button variant='contained' type='submit' className={classes.btn}>
        Add task!
      </Button>
    </form>
  );
};

export default Input;
