import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



function AdminDashboard(props) {
    const [data, setData] = useState([])
    const history = useHistory();
    useEffect(()=>{
        try{
            Axios.get("https://randomuser.me/api/?results=50")
            .then((res) => {
                setData(res.data.results)
            })
        }catch (error) {
            console.error(error);
        }
    },[])

    
    
    return (
        <div className="container mt-3 text-center ">
            <h1>Welcome to Admin dashboard</h1>
            <table class="table mt-5 table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">DOB</th>
                <th scope="col">Full Detail</th>
                </tr>
            </thead>
            <tbody>
                { data.map((user, tabIndex)=> {
                    const handleClick = ()=>{
                        props.getFullDetails(data[tabIndex])
                        history.push("/user-detail")
                    }
                    
                   return(
                <tr>
                <th scope="row">{tabIndex+1}</th>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.street.number}, {user.location.city}, {user.location.country}, {user.location.postcode}</td>
                <td>{user.dob.date.substring(0, 10)}</td>
                <td>
                    <Button onClick={handleClick} variant="contained" color="primary">
                        View details
                    </Button>
                </td>
                </tr>
                  )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard
