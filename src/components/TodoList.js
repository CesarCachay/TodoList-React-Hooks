import React from "react";

import Todo from "./Todo";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      {todos.length !== 0 ? (
        <List>
          {todos.map((todo, index) => (
            <>
              <ListItem>
                <ListItemText>
                  <Todo
                    {...todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                  />
                </ListItemText>
              </ListItem>
              {index < todos.length - 1 && <Divider />}
              {/* {index < todos.length - 1 ? <Divider /> : ""} give us same result like line 30*/}
            </>
          ))}
        </List>
      ) : null}
    </Paper>
  );
}

export default TodoList;
