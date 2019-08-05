/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const paperHeight = {
  padding: "0px",
  margin: "0px",
  height: "100vh",
  backgroundColor: "#fafafa"
};

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Learn React-Redux", completed: false },
    { id: 2, task: "Wash Car", completed: false },
    { id: 3, task: "Deploy Project", completed: true }
  ];

  const [todos, setTodos] = React.useState(initialTodos);

  function addTodo(newTodo) {
    setTodos([...todos, { id: 4, task: newTodo, completed: false }]);
  }

  return (
    <Paper style={paperHeight} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Typography color="inherit">TODOS WITH HOOKS</Typography>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
