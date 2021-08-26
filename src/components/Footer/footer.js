import { Box,Button,makeStyles,Container, Typography } from "@material-ui/core";
const useStyles=makeStyles({
    root:{
        flexGrow:1,
        textAlign:'center',
        borderTop:'1px solid #d5d5d5',
        marginTop:20,
        padding:10,
    },
    title:{
        fontFamily:"italic",
        color:"#3f51b5",
    },
})
const Footer=()=>{
    const classes=useStyles();
    return(
        <Container className={classes.root}>
            <Typography variant='h6' className={classes.title}>
               Books  &copy; {new Date().getFullYear()}. All Rights Reserved
            </Typography>
        </Container>
    )
}
export default Footer;