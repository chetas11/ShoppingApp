import React, {useState} from 'react'
import Navbar from './Navbar'
import GetAppIcon from '@material-ui/icons/GetApp';
import Product from './Product'

function Home() {

    const [category, setCategory] = useState("")

    function handleClickAll(){
        setCategory("All")
    }

    function handleClickElec(){
        setCategory("Elec")
    }

    function handleClickMen(){
        setCategory("men")
    }

    function handleClickWomen(){
        setCategory("women")
    }



    return (
    <>
        <Navbar />
        <div className="row">
            <div  className="col-lg-2 col-md-2 col-sm-6 mt-5">
                <button className="btn btn-lg btn-white">Categories</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><GetAppIcon /></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul>
                <li><button onClick={handleClickAll}>ALL</button></li>
                <li><button onClick={handleClickElec}>Electronics</button></li>
                <li><button onClick={handleClickMen}>Men Clothing</button></li>
                <li><button onClick={handleClickWomen}>Women Clothing</button></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-6 mt-5">
                <Product category={category} />
            </div>
        </div>
    </>
    )
}

export default Home
