import React from "react";

import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";

function EditTodo({ editTodo, toggleTodoForm, id, task }) {
  const [value, handleChange, reset] = useInputState(task);

  function handleUpdate(e) {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleTodoForm();
  }

  return (
    <form onSubmit={handleUpdate}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodo;
