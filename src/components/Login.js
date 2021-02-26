import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, useHistory  } from "react-router-dom";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// import Axios from 'axios'
// import useLoader from '../hooks/useLoader';
// import {toast} from 'react-toastify';
import Navbar from './Navbar'
// import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  }
  },
}));

  

export default function Login() {
       const classes = useStyles()
       const [user, setUser] = useState({email:"",password:""})
//     const addNewURL = "https://damp-ocean-44105.herokuapp.com/login"
       const history = useHistory();
//     const [loader, showLoader, hideLoader] = useLoader()

    

   function onPasswordChange(e){
      setUser({
        ...user,
        password:e.target.value
      })
    }

    function onEmailChange(e){
      setUser({
        ...user,
        email:e.target.value
      })
    }

    const handleLogin = ()=>{
        if(user.email === "admin@xyz.com" && user.password === "Admin_007"){
            history.push("/dashboard")
        }else{
            alert("Wrong username and password")
        }
    }

    return (
            <>
            <Navbar />
            <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <h1 className="mb-0">Admin <SupervisorAccountIcon /></h1>
                <small>Enter your credentials to access the admin dashboard</small>
                <input required type="email" onChange={onEmailChange} className="form-control mt-4" />
                <br />
                <input required type="password" onChange={onPasswordChange} className="input form-control" />
                <br />
                <Button variant="contained" onClick={handleLogin} color="primary">
                    Login
                </Button>
                </div>
                
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
            </div>
            </>
    )
}
