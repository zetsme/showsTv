import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  makeStyles,
  Button,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles({
  searchBar: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

const SearchBar = ({ setQuery }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };
  return (
    <form className={classes.searchBar} onSubmit={onSubmit}>
      <FormControl size='medium' fullWidth variant='outlined'>
        <InputLabel>Search</InputLabel>
        <OutlinedInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          endAdornment={
            <InputAdornment position='end'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                size='small'
                children={<Search fontSize='large' />}
              ></Button>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </form>
  );
};

export default SearchBar;
