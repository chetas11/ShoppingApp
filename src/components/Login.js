import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory  } from "react-router-dom";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Navbar from './Navbar'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify';

toast.configure()

export default function Login() {
       const [user, setUser] = useState({email:"",password:""})
       const history = useHistory();
     
       
    function notify() {
      toast.error('Wrong username or password', { position: toast.POSITION.TOP_CENTER, autoClose:2000 })
    }

    

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
        if(user.email === process.env.REACT_APP_ADMINMAIL && user.password === process.env.REACT_APP_ADMINPASSWORD){
            history.push("/dashboard")
        }else{
            notify()
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
                <input required type="email" onChange={onEmailChange} placeholder="Enter your email" className="form-control mt-4" />
                <br />
                <input required type="password" onChange={onPasswordChange} placeholder="Enter your password" className="input form-control" />
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
