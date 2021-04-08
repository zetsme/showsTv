import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';
import Masonry from 'react-masonry-css';
//
import EpisodeCard from '../components/EpisodeCard';
import LoadingOrError from '../components/LoadingOrError';
import ScrollArrow from '../components/ScrollArrow';
import useFetch from '../useFetch';
import { defaultImage } from '../utils';
import clsx from 'clsx';
//
const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      marginTop: theme.spacing(2),
    },
    'my-masonry-grid': {
      display: 'flex',
      marginLeft: '-30px',
      width: 'auto',
    },
    'my-masonry-grid_column': {
      paddingLeft: '30px',
      backgroundClip: 'padding-box',
      '& > div': {
        marginBottom: '30px',
      },
    },
  };
});
//
const Episodes = () => {
  const { seasonId } = useParams();
  const { data, error, loading } = useFetch(`http://api.tvmaze.com/seasons/${seasonId}/episodes`);
  const classes = useStyles();

  const breakpoints = {
    default: 4,
    1100: 3,
    900: 2,
    600: 1,
  };
  return (
    <>
      <LoadingOrError error={error} loading={loading} />
      {data && (
        <Masonry
          breakpointCols={breakpoints}
          className={clsx(classes['my-masonry-grid'], classes.gridContainer)}
          columnClassName={classes['my-masonry-grid_column']}
        >
          {data.map((episode) => (
            <div key={episode.id}>
              <EpisodeCard
                season={episode.season}
                number={episode.number}
                date={episode.airdate}
                summary={episode.summary ? episode.summary : 'No summary'}
                image={episode.image ? episode.image.original : defaultImage}
              />
            </div>
          ))}
        </Masonry>
      )}
      <ScrollArrow />
    </>
  );
};

export default Episodes;
