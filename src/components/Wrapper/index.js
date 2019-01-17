import React from "react";
import Grid from '@material-ui/core/Grid';
import "./style.css";

function Wrapper(props) {
  return             <Grid container spacing={8}><div className="wrapper">{props.children}</div></Grid>;
}

export default Wrapper;
