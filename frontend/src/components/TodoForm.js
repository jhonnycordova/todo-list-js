import React from 'react';
import {
  FormControl, Input, InputLabel, FormHelperText, Button,
} from '@material-ui/core';

export default (props) => {
  const inputRef = React.createRef();

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    props.addNewTodo(inputValue);
  };

  return (
    <FormControl>
      <InputLabel htmlFor="new-todo-input">Todo Name</InputLabel>
      <Input id="new-todo-input" aria-describedby="my-helper-text" ref={inputRef} />
      <FormHelperText id="my-helper-text">Add new todo...</FormHelperText>
      <Button color="primary" onClick={handleClick}>Add</Button>
    </FormControl>
  );
};
