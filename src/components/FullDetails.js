import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
    
export default function FullDetails(props) {        //props from the dashboard component
    const history = useHistory();

    function backToUsers(){
        history.push("/dashboard")
    }

    return (
        <div className="container mt-5">
        <h1 className="text-center">User Information</h1>      
        <hr />
        <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-6">
                <img src={props.userData.picture.large} className="img-fluid profile" alt="fooditem"></img><br /><br />
            </div>
            <div className="col-lg-7 col-md-8 col-sm-6">
                <h1 className="fullname">{props.userData.name.title}. {props.userData.name.first} {props.userData.name.last}</h1>
                <p>Username: {props.userData.login.username}</p>
                <p>Email: {props.userData.email}</p>
                <p>Cell: {props.userData.cell}</p>
                <p>Gender: {props.userData.gender}</p>
                <p>Age: {props.userData.dob.age}</p>
                <p>DOB: {props.userData.dob.date.substring(0, 10)}</p>
                <br />
                <p>Address: {props.userData.location.street.number}, {props.userData.location.street.name}, {props.userData.location.city}, {props.userData.location.state}</p>
                <p>{props.userData.location.country}, {props.userData.location.postcode}</p>
                <p>Timezone: {props.userData.location.timezone.description}</p>
                <p>Registerd On: {props.userData.registered.date.substring(0, 10)}</p>
                <br />
                <Button onClick={backToUsers} variant="contained" color="secondary">
                    Back to users
                </Button>
            </div>
        </div>
        <hr />
        </div>
    )
}
