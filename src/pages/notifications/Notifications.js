import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import {  toast } from "react-toastify";


import MUIDataTable from "mui-datatables";
// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage(props) {
  var classes = useStyles();

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);
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
            // options={{
            //   filterType: "checkbox",
            // }}
          />
        </Grid>
       
      </Grid>
    </>
  );

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: "New user feedback received",
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: "Message was not sent!",
          variant: "contained",
          color: "secondary",
          extraButton: "Resend",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "The item was shipped",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
