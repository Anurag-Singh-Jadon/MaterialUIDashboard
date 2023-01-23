import React from "react";
import {
 
  Typography,
  Box
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
const AddRow = (props) => {
   
  return (
 
   <>
        <Tooltip title={"custom icon"}>
          <IconButton  onClick={props.handleClick}>
            <AddIcon  />
          </IconButton>
        </Tooltip>
      </>
 
  )
};

export default AddRow;
