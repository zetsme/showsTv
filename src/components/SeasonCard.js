import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { ExpandMore, Movie } from '@material-ui/icons';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
//
import { firstCapitalLetter, removeTags } from '../utils';

const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: 0,
      paddingTop: '130%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    summary: {
      padding: theme.spacing(2),
    },
  };
});

const SeasonCard = ({ id, episodeOrder, premiereDate, endDate, image, summary, number }) => {
  const dataInfo = {
    'season number': number,
    episodes: episodeOrder,
    'premier date': premiereDate,
    'end date': endDate,
  };
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <div>
        <CardMedia image={image} title='season image' className={classes.media} />
      </div>
      <CardContent>
        {Object.keys(dataInfo).map((label, index) => (
          <Typography key={index}>
            {firstCapitalLetter(label)} : {dataInfo[label]}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        {episodeOrder && premiereDate && (
          <Button
            component={RouterLink}
            to={`/seasons/${id}/episodes`}
            variant='contained'
            color='primary'
            startIcon={<Movie />}
          >
            Episodes
          </Button>
        )}
        {summary && (
          <Button
            onClick={handleExpandClick}
            aria-expanded={expanded}
            variant='outlined'
            color='secondary'
            endIcon={
              <ExpandMore
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
              />
            }
          >
            Summary
          </Button>
        )}
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Typography color='textSecondary' className={classes.summary}>
          {removeTags(summary)}
        </Typography>
      </Collapse>
    </Card>
  );
};

export default SeasonCard;
