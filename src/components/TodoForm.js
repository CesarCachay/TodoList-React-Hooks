import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    reset();
  }

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;
