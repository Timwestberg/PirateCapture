import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import "./style.css";
const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
      maxHeight: "200px",
      maxWidth: "200px",
      
  },
  appbar: {
    background: '#E3A71D'
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    
      <AppBar position="static" className={classes.appbar}>
      
      <Grid container spacing={24}>
      <Grid item xs={6}>

        <Toolbar>
            <img alt="One Piece" className={classes.title} src="https://vignette.wikia.nocookie.net/logopedia/images/7/75/One_Piece_Logo.png/revision/latest?cb=20110604211709"></img>
        </Toolbar>
        
        </Grid>

   

        

        <Grid item xs={12} sm={3}>
 
              <h3 className="ScoreHead">Captured:<span className='score'>{props.score}</span></h3>

        </Grid>
    



        <Grid item xs={12} sm={3}>

              <h3 className="HighscoreHead">Top Score:<span className='HighScoreScore'>{props.highScore}</span></h3>

        </Grid>


       


        </Grid>
      </AppBar>
  
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);