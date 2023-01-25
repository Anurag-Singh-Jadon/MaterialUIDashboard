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
import AddButton from "../../components/AddButton/AddButton";

// components
import PageTitle from "../../components/PageTitle";
import MUIDataTable from "mui-datatables";
export default function TypographyPage() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");
  const updateMenuValue = (e, val) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  const datatableData = [
    [
      1,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      2,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      3,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      4,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      5,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      6,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      7,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      8,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      9,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
    [
      10,
      "Javascript Developer",
      "Red Apple College Drive",
      "2022-12-31T18:30:00.0Z",
      "2022-12-31T18:30:00.0Z",
      "active",
      "...",
    ],
  ];

  return (
    <>
      <PageTitle title1="Event List" title2="Event List" />
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
