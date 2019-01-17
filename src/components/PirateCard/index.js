import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./style.css";

const styles = {
  card: {
    background: "url('https://vignette.wikia.nocookie.net/fairyonepiecetail/images/8/8e/StrawHatflagge.jpg/revision/latest?cb=20120810042640')",
    backgroundPosition:'center',
    boxShadow: '0px 7px 72px -13px rgba(0,0,0,0.75)',
    backgroundRepeat:'no-repeat',
    height: '100%',
    backgroundSize: 'cover',
    borderRadius: '20px',
    maxHeight:'160px',
    margin: '1rem',
    position: 'relative',
    maxWidth:'160px',
  },
  media: {
   height:'160px',
   width:'160px'
  },
   paper: {
    textAlign: 'center',
  },

};


function PirateCard(props) {
  const { classes } = props;
  return (
    // Using multiple classes for styling purposes
  
    <Grid item xs={6} sm={4} md={3}>
    <Card onClick={() =>  props.capturePirate(props.id)} id="PirateCards" className={`box ${classes.card}`} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      <CardActionArea   id="PirateCard" className='hvr-overline-from-center hvr-float-shadow'>
        <CardMedia 
          component="img"
          alt={props.name}
          className={classes.media}
          image={props.image}
          title={props.name}
          count={props.count}
        ></CardMedia>
      </CardActionArea>
    </Card>
    </Grid>
  );
}

PirateCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PirateCard);

