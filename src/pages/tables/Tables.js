import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";



const datatableData = [
  [1, "java.", "5 Years", "Active","..."],
  [2, "java", "5 Years", "Active","..."],
  [3, "js", "5 Years", "Active","..."],
  [4, "js", "5 Years", "Active","..."],
  
];

export default function Tables() {
  return (
    <>
      <PageTitle title1="Question Sets List "  title2="Question Sets List"  />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Question Sets"
            data={datatableData}
            columns={[ "SL NO" ,"LANGUAGE NAME","EXPERIENCE", "STATUS", "STATE"]}
            options={{download:false,print:false,viewColumns:false}}
            
          />
        </Grid>
       
      </Grid>
    </>
  );
}
