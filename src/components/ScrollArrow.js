import { Fab, makeStyles } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => {
  return {
    goUp: {
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      animation: `$pulse infinite 2000ms ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes pulse': {
      '50%': {
        transform: 'scale(1.1)',
      },
    },
  };
});

const ScrollArrow = () => {
  const classes = useStyles();
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollTop = (e) => {
    setScrollHeight(e.currentTarget.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollTop);
    return () => window.removeEventListener('scroll', scrollTop);
  });
  return (
    <>
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
    </>
  );
};

export default ScrollArrow;
