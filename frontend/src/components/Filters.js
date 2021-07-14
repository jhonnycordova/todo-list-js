import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const Filters = ({ onFiltersChanged }) => {
  const COMPLETED = 'completed';
  const NOT_COMPLETED = 'not_completed';
  const [statusToDoFilter, setStatusToDoFilter] = useState('');

  const handleChanged = (e) => {
    setStatusToDoFilter(e.target.value);
    onFiltersChanged(e.target.value);
  };

  return (
    <FormControl>
      <Select value={statusToDoFilter} displayEmpty onChange={handleChanged}>
        <MenuItem value="">
          <em>Estado de la tarea</em>
        </MenuItem>
        <MenuItem value={COMPLETED}>Completada</MenuItem>
        <MenuItem value={NOT_COMPLETED}>Por completar</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filters;
