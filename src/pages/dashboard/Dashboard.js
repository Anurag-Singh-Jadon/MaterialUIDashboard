import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";



import MUIDataTable from "mui-datatables";

// components

const datatableData = [
  [1,"Javascript Developer", "java.", "active", "UttarPradesh"],
  [2,"Andoid Developer", "java", "active", "Kolkata"],
  [3,"ReactDeveloper", "js", "active", "Kolkata"],
  [4,"React Native Developer", "js", "active", "Kolkata"],
  [5,"PHP", "js", "active", "Kolkata"],
  [6,"Node", "js", "active", "Kolkata"],
  [7,"C", "js", "active", "Kolkata"],
  [8,"C++", "js", "active", "Kolkata"],
  [9,"Java", "js", "active", "Kolkata"],
  [10,"C#", "js", "active", "Kolkata"],
  
];
const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
   

     <PageTitle title1="Language List"  title2="Language List"  />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Language"
            data={datatableData}
            columns={[ "ID" ,"LANGUAGE NAME","LANGUAGE EXTENSION", "LANGUAGE STATUS", "STATE"]}
            // options={{
            //   filterType: "checkbox",
            // }}
          />
        </Grid>
       
      </Grid>

       
      {/* <Grid container spacing={4}>
      
       

        <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Language"
            data={datatableData}
            columns={[ "ID" ,"LANGUAGE NAME","LANGUAGE EXTENSION", "LANGUAGE STATUS", "STATE"]}
            // options={{
            //   filterType: "checkbox",
            // }}
          />
        </Grid>
      
      </Grid>
      </Grid> */}
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
