/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import useTodoState from "../hooks/useTodoState";
import useLocalStorageState from "../hooks/useLocalStorageState";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const paperHeight = {
  padding: "0px",
  margin: "0px",
  height: "100vh",
  backgroundColor: "#fafafa"
};

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Wash the car", completed: false }];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  return (
    <Paper style={paperHeight} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Typography color="inherit">TODOS WITH HOOKS</Typography>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
