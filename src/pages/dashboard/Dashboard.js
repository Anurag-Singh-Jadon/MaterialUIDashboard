import React, { useState } from "react";
import {
  Grid,
  Modal,
  Paper,
  TextField,
 
  Select,
  MenuItem,
  Box
} from "@material-ui/core";


// components

import PageTitle from "../../components/PageTitle";

import MUIDataTable from "mui-datatables";
//import AddRow from "../AddRow/AddRow";
import AddButton from "../../components/AddButton/AddButton";

// components

const datatableData = [
  [1, "Javascript Developer", "java.", "active", "UttarPradesh"],
  [2, "Andoid Developer", "java", "active", "Kolkata"],
  [3, "ReactDeveloper", "js", "active", "Kolkata"],
  [4, "React Native Developer", "js", "active", "Kolkata"],
  [5, "PHP", "js", "active", "Kolkata"],
  [6, "Node", "js", "active", "Kolkata"],
  [7, "C", "js", "active", "Kolkata"],
  [8, "C++", "js", "active", "Kolkata"],
  [9, "Java", "js", "active", "Kolkata"],
  [10, "C#", "js", "active", "Kolkata"],
];



export default function Dashboard(props) {
 
  const [course, setCourse] = useState("");
  const [open, setOpen] = useState(false);
  const updateMenuValue = (e, val) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };

  return (
    <>
      <PageTitle title1="Language List" title2="Language List" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Language"
            data={datatableData}
            columns={[
              "ID",
              "LANGUAGE NAME",
              "LANGUAGE EXTENSION",
              "LANGUAGE STATUS",
              "STATE",
            ]}
            options={{
              download: false,
              print: false,
              viewColumns: false,
              selectableRows: false,
              customToolbar: () => {
                return <AddButton handleClick={() => setOpen(true)} />;
              },
            }}
          />
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <Paper
              elevation={10}
              style={{
                width: 400,
                height: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* <Grid display="flex" alignItems="center" justifyContent="center"> */}
              <TextField
                id="outlined-basic"
                label="Language Name"
                variant="outlined"
                style={{ width: 350 }}
              />
              <Grid>
                <Select
                  style={{ width: 350, marginTop: 15, height: 50 }}
                  value={course}
                  onChange={updateMenuValue}
                >
                  <MenuItem value={1}>Java</MenuItem>
                  <MenuItem value={2}>JS</MenuItem>
                  <MenuItem value={3}>PHP</MenuItem>
                  <MenuItem value={4}>Node</MenuItem>
                  <MenuItem value={5}>JS</MenuItem>
                  <MenuItem value={5}>JS</MenuItem>
                  <MenuItem value={5}>JS</MenuItem>
                  <MenuItem value={5}>JS</MenuItem>
                  <MenuItem value={5}>JS</MenuItem>
                </Select>
              </Grid>
              <Box style={{marginTop:200,display:'flex',flexDirection:'row',justifyContent:'space-around'}} >
                <Box onClick={() => setOpen(false)} style={{cursor:'pointer'}}>
                 Cancel
                </Box>
                <Box style={{marginLeft: 120}}>
               Create Language
                </Box>
                
              </Box>  
              {/* </Grid> */}
            </Paper>
          </Modal>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################

// Modal
