import { makeStyles, Typography } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((them) => ({
  root: {
    width: "100%",
    height: "75vh",
    position:'relative',
  },
  progress:{
      width:'70%',
      marginLeft:'15%',
      // marginTop:'40%',
      textAlign:'center',
      position:'absolute',
      bottom:"0px",

  }
}));

const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.progress}>
        <CircularProgress />
        <Typography variant='h5'>Loading</Typography>
      </div>
    </div>
  );
};
export default Progress;
