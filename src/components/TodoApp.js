/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";

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
    setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
    console.log(uuid());
  }

  function removeTodo(todoId) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  function toggleTodo(todoId) {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  function editTodo(todoId, newTask) {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  }

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
