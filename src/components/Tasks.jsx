import React from "react";
import { useSelector } from "react-redux";
import { selecteTodoList, toggleTodo, deleteTodo } from "../redux/TodoSlice";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  IconButton,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import useStyles from "./Tasks_styles";

const Tasks = () => {
  const todoList = useSelector(selecteTodoList);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {todoList.map((task) => (
        <>
          <ListItem
            key={task.id}
            onClick={() => dispatch(toggleTodo(task.id))}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
            dense
            button
          >
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={task.completed}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>

            <ListItemText>{task.item}</ListItemText>
            <IconButton
              edge='end'
              aria-label='todo'
              onClick={() => dispatch(deleteTodo(task.id))}
            >
              <Delete />
            </IconButton>
          </ListItem>
        </>
      ))}
    </List>
  );
};

export default Tasks;
