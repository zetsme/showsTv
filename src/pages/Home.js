import { Fab, Grid, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { ArrowUpward } from '@material-ui/icons';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import useFetch from '../useFetch';
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    '& > div': {
      padding: theme.spacing(3),
    },
  },
  goUp: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [scrollHeight, setScrollHeight] = useState(0);
  const { data, loading, error } = useFetch(`http://api.tvmaze.com/search/shows?q=${query}`);
  const scrollTop = (e) => {
    setScrollHeight(e.currentTarget.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollTop);
    return () => window.removeEventListener('scroll', scrollTop);
  });
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {error && <div>{error}</div>}
      {loading && <div>Loading.....</div>}
      {data && (
        <Grid container className={classes.gridContainer}>
          {data.map((item) => (
            <ShowCard
              key={item.show.id}
              name={item.show.name}
              rating={item.show.rating?.average || 'No Rating'}
              img={
                item.show.image?.medium ||
                'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80'
              }
            />
          ))}
        </Grid>
      )}
      {scrollHeight > 200 ? (
        <Fab
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={classes.goUp}
          color='secondary'
          aria-label='add'
        >
          <ArrowUpward />
        </Fab>
      ) : null}
    </div>
  );
};

export default Home;
