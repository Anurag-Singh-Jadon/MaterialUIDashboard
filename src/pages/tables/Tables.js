import React,{useState} from "react";
import {
  Grid,
  Modal,
  Paper,
  TextField,
 
  Select,
  MenuItem,
  Box
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import AddButton from "../../components/AddButton/AddButton";


const datatableData = [
  [1, "java.", "5 Years", "Active","..."],
  [2, "java", "5 Years", "Active","..."],
  [3, "js", "5 Years", "Active","..."],
  [4, "js", "5 Years", "Active","..."],
  
];

export default function Tables() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");
  const updateMenuValue = (e, val) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  return (
    <>
      <PageTitle title1="Question Sets List "  title2="Question Sets List"  />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <MUIDataTable
            title="Admin"
            data={datatableData}
            columns={[ "ID" ,"ADMIN USER NAME","ADMIN EMAIL", "ADMIN PHONE", ]}
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
