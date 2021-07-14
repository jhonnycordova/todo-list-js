import React, { useState } from 'react';
import {
  FormControl, Input, InputLabel, Button,
} from '@material-ui/core';

export default ({ onAddTodo }) => {
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const inputRef = React.createRef();

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    if (inputValue === '') return;
    setIsButtonDisable(false);

    onAddTodo(inputValue, () => {
      setIsButtonDisable(true);
      inputRef.current.value = '';
    });
  };

  return (
    <FormControl>
      <InputLabel htmlFor="new-todo-input">Todo Name</InputLabel>
      <Input id="new-todo-input" ref={inputRef} />
      <Button color="primary" onClick={handleClick} disabled={isButtonDisable}>Add</Button>
    </FormControl>
  );
};
