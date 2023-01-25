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
// styles
import "react-toastify/dist/ReactToastify.css";

// components

import PageTitle from "../../components/PageTitle/PageTitle";
import AddButton from "../../components/AddButton/AddButton";





export default function NotificationsPage(props) {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");
  const updateMenuValue = (e, val) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  const datatableData = [
    [1,"admin", "admin@redappletech.com", "8888889999" ],
    [2,"rajat", "rajat@redappletech.com", "8888879999"],
   
    
  ];

  return (
    <>
       <PageTitle title1="Admin List"  title2="Admin List"  />
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


