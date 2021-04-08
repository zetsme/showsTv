import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
//
const useStyles = makeStyles((theme) => {
  return {
    flexWrapper: {
      display: 'flex',
      height: '100%',
    },
    media: {
      minWidth: '150px',
      paddingTop: '30%',
    },
    titleWrapper: {
      flexGrow: 1,
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
});
const CastCard = ({ name, country, birthday, character, image }) => {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.flexWrapper}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
          <Typography variant='h5'>{name}</Typography>
          <Typography variant='subtitle1'> as {character}</Typography>
        </div>
        <Typography color='textSecondary'>Country: {country}</Typography>
        <Typography color='textSecondary'>Birthday: {birthday}</Typography>
      </CardContent>
    </Card>
  );
};

export default CastCard;
