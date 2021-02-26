import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));


const InputField = (props) =>{
    const classes = useStyles();
    return(
        <div>
            <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Products"
                inputProps={{ 'aria-label': 'Search products' }}
                onChange={props.onInputChnage}  
                value={props.value}
            />
            </Paper>
        </div>
    )
}

export default InputField;