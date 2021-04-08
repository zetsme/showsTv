import { useParams } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
//
import useFetch from '../useFetch';
import LoadingOrError from '../components/LoadingOrError';
import SeasonCard from '../components/SeasonCard';
import ScrollArrow from '../components/ScrollArrow';
import { defaultImage } from '../utils';
//
const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      marginTop: theme.spacing(2),
    },
  };
});
const ShowSeasons = () => {
  const classes = useStyles();
  const { showId } = useParams();
  const { data, error, loading } = useFetch(`http://api.tvmaze.com/shows/${showId}/seasons`);
  return (
    <>
      <LoadingOrError error={error} loading={loading} />
      {data && (
        <Grid container spacing={2} className={classes.gridContainer}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <SeasonCard
                id={item.id}
                episodeOrder={item.episodeOrder}
                premiereDate={item.premiereDate}
                endDate={item.premiereDate}
                image={item.image ? item.image.original : defaultImage}
                summary={item.summary}
                number={item.number}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <ScrollArrow />
    </>
  );
};

export default ShowSeasons;
