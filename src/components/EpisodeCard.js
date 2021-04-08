import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
//
import { removeTags } from '../utils';
//
const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: 0,
      paddingTop: '60%',
    },
  };
});

const EpisodeCard = ({ season, number, date, summary, image }) => {
  const classes = useStyles();
  return (
    <Card elevation={5}>
      <CardHeader title={`Season: ${season}, Episode: ${number}`} subheader={date} />
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography>{removeTags(summary)}</Typography>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
