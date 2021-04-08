import { Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import ScrollArrow from '../components/ScrollArrow';
import LoadingOrError from '../components/LoadingOrError';
import useFetch from '../useFetch';
import { defaultImage } from '../utils';
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    '& > div': {
      padding: theme.spacing(3),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const { data, loading, error } = useFetch(`http://api.tvmaze.com/search/shows?q=${query}`);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <LoadingOrError loading={loading} error={error} />
      {data && (
        <Grid container className={classes.gridContainer}>
          {data.map((item) => (
            <ShowCard
              id={item.show.id}
              key={item.show.id}
              name={item.show.name}
              rating={item.show.rating?.average || 'No Rating'}
              img={item.show.image?.medium || defaultImage}
            />
          ))}
        </Grid>
      )}
      <ScrollArrow />
    </div>
  );
};

export default Home;
