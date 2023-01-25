import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
const AddButton = (props) => {
   
  return (
 
   <>
        <Tooltip title={"custom icon"} style={{background:"#536DFE"}}>
          <IconButton  onClick={props.handleClick}>
            <AddIcon  />
          </IconButton>
        </Tooltip>
      </>
 
  )
};

export default AddButton;