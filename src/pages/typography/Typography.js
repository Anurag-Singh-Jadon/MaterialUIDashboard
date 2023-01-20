import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import MUIDataTable from "mui-datatables";
export default function TypographyPage() {
  var classes = useStyles();
  const datatableData = [
    [1,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..."],
    [2,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..."],
    [3,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..."],
    [4,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..." ],
    [5,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..."],
    [6,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..." ],
    [7,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..." ],
    [8,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..." ],
    [9,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..." ],
    [10,"Javascript Developer", "Red Apple College Drive","2022-12-31T18:30:00.0Z","2022-12-31T18:30:00.0Z","active","..." ],
    
  ];

  return (
    <>
       <PageTitle title1="Event List"  title2="Event List"  />
       <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Event"
            data={datatableData}
            columns={[ "ID" ,"EVENT LOGO","EVENT NAME","END DATE", "LANGUAGE STATUS", "STATE",""]}
            // options={{
            //   filterType: "checkbox",
            // }}
          />
        </Grid>
       
      </Grid>
    </>
  );
}
