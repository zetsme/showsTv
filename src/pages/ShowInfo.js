import { Button, CardMedia, Chip, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';
import LoadingOrError from '../components/LoadingOrError';
import useFetch from '../useFetch';
import { removeTags } from '../utils';

const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: 0,
      paddingTop: '130%',
    },
    gridContainer: {
      marginTop: theme.spacing(2),
    },
    infoContainer: {
      '& > *:not(:last-child)': {
        marginBottom: 10,
      },
    },
    gapContainer: {
      display: 'flex',
      gap: '10px',
    },
  };
});

const ShowInfo = () => {
  const { showId } = useParams();
  const classes = useStyles();
  const { data, loading, error } = useFetch(`http://api.tvmaze.com/shows/${showId}`);

  return (
    <>
      <LoadingOrError loading={loading} error={error} />
      {data && (
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} sm={5}>
            <CardMedia
              className={classes.media}
              image={
                data.image
                  ? data.image.original
                  : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80'
              }
              title={data.name}
            />
          </Grid>
          <Grid alignContent='flex-start' spacing={2} container item xs={12} sm={7}>
            <Grid item xs={12} className={classes.infoContainer}>
              <div className={classes.gapContainer}>
                <Button component={RouterLink} to={`/shows/${showId}/seasons`} variant='contained'>
                  Seasons
                </Button>
                <Button
                  component={RouterLink}
                  to={`/shows/${showId}/cast`}
                  variant='contained'
                  color='primary'
                >
                  Cast
                </Button>
              </div>
              <Typography>{data.name}</Typography>
              <div className={classes.gapContainer}>
                {data.genres.map((item) => (
                  <Chip key={item} label={item} variant='outlined' color='primary' />
                ))}
              </div>
              <Typography>Status : {data.status ? data.status : 'Undefined'}</Typography>
              <Typography>
                Rating :{' '}
                {data.rating && data.rating.average !== null ? data.rating.average : 'No Rating'}
              </Typography>
              <Typography>
                Network:{' '}
                {data.network
                  ? `${data.network.name} - ${data.network.country.name}`
                  : data.webChannel.name
                  ? data.webChannel.name
                  : 'Undefined'}
              </Typography>
              <Typography>
                Official site:{' '}
                {data.officialSite ? (
                  <Link href={data.officialSite} children={data.officialSite} />
                ) : (
                  'No website'
                )}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color='textSecondary' variant='body1'>
                {removeTags(data.summary)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ShowInfo;
