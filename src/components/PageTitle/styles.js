import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent:'center',
    flexDirection:'column',
    // marginBottom: theme.spacing(4),
    // marginTop: theme.spacing(5),
    height: 200,
    background:'#536DFE',
    paddingLeft: 12
  },
  typo: {
    color: '#ffffff',
  },
  typo1: {
    color: '#B9B9B9',
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    "&:active": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
}));
