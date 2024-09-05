import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ setQuery }) => {
  const [input, setInput] = React.useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <TextField
      label="Szukaj"
      value={input}
      onChange={handleChange}
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
