import React, { useState } from 'react';
import {
  FormControl, Input, InputLabel, Button, FormHelperText,
} from '@material-ui/core';

export default ({ onAddTodo }) => {
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const inputRef = React.createRef();

  const handleClick = (event) => {
    const inputValue = inputRef.current.value;
    if (inputValue === '') return;
    setIsButtonDisable(false);
    event.preventDefault();

    onAddTodo(inputValue, (error) => {
      setIsButtonDisable(true);
      if (error) {
        setErrorMessage(error.message);
      } else {
        inputRef.current.value = '';
        setErrorMessage(undefined);
      }
    });
  };

  return (
    <FormControl>
      <InputLabel htmlFor="new-todo-input">Todo Name</InputLabel>
      <Input id="new-todo-input" ref={inputRef} />
      {errorMessage && errorMessage !== '' && <FormHelperText error>{errorMessage}</FormHelperText>}
      <Button color="primary" onClick={handleClick} disabled={isButtonDisable}>Add</Button>
    </FormControl>
  );
};
