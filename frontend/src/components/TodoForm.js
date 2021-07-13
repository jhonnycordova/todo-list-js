import React from 'react';
import {
  FormControl, Input, InputLabel, Button,
} from '@material-ui/core';

export default (props) => {
  const inputRef = React.createRef();

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    if (inputValue === '') return;
    props.addNewTodo(inputValue);
  };

  return (
    <FormControl>
      <InputLabel htmlFor="new-todo-input">Todo Name</InputLabel>
      <Input id="new-todo-input" ref={inputRef} />
      <Button color="primary" onClick={handleClick}>Add</Button>
    </FormControl>
  );
};
