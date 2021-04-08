import { Grid, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
//
import CastCard from '../components/CastCard';
import LoadingOrError from '../components/LoadingOrError';
import useFetch from '../useFetch';
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
//
const Cast = () => {
  const classes = useStyles();
  const { showId } = useParams();
  const { data, error, loading } = useFetch(`http://api.tvmaze.com/shows/${showId}/cast`);
  return (
    <>
      <LoadingOrError error={error} loading={loading} />
      {data && (
        <Grid className={classes.gridContainer} container spacing={3}>
          {data.map((item) => (
            <Grid key={item.person.id} item xs={12} md={6} lg={4}>
              {item.person && (
                <CastCard
                  name={item.person.name ? item.person.name : 'Undefined'}
                  country={item.person.country ? item.person.country.name : 'Undefined'}
                  birthday={item.person.birthday ? item.person.birthday : 'Undefined'}
                  character={item.character.name}
                  image={item.person.image ? item.person.image.medium : defaultImage}
                />
              )}
            </Grid>
          ))}
        </Grid>
      )}
      <ScrollArrow />
    </>
  );
};

export default Cast;
