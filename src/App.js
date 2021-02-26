import './App.css';
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import FullDetails from './components/FullDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {useState} from 'react'
import Home from './components/Home'

function App() {

  const [userData, setData] = useState()

  const getFullDetails = (obj)=>{
    setData(obj)
  }

  return (
    <>
      <Router>
        <Switch>
            <Route path="/admin">
                <Login />
            </Route>
            <Route path="/dashboard">
                <AdminDashboard getFullDetails={getFullDetails}/>
            </Route>
            <Route path="/user-detail">
                <FullDetails userData={userData}/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
