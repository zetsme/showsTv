import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '130%',
  },
  cardContentWrapper: {
    height: ' 100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
const ShowCard = ({ name, rating, img }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
      <Card className={classes.card}>
        <CardActionArea style={{ height: '100%' }}>
          <div className={classes.cardContentWrapper}>
            <CardMedia className={classes.media} image={img} title={name} />
            <CardContent>
              <Typography>{name}</Typography>
              <Typography>{rating}</Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ShowCard;

/* <div>
<div>{name}</div>
<img src={img} alt={name} />
<p>{rating}</p>
</div> */
