import React from "react";
import { Button } from "@material-ui/core";

// styles
import useStyles from "./styles";
import { Home } from "@material-ui/icons";
// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
     
      <Typography className={classes.typo} variant="h4" size="sm">
        {props.title1}
      </Typography>
      <div style={{display:'flex',marginRight:20,marginTop:15}}>
        <Home />
      <Typography className={classes.typo1} variant="h5" size="sm">
        {props.title2}
      </Typography>
      </div>
      {/* {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary"
        >
          {props.button}
        </Button>
      )} */}
    </div>
  );
}
