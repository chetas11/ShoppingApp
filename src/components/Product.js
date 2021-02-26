import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import InputField from './SearchComponent'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

function Product(props) {

    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState("");

    const onInputChnage = (e) =>{
    setSearchText(e.target.value)
    }

    let URL = "https://fakestoreapi.com/products"

  
    useEffect(()=>{
        try{
            Axios.get(URL)
            .then((res) => {
                setData(res.data)
            })
        }catch (error) {
            console.error(error);
        }
    
    }, [])
        

    
    if(props.category === "Elec"){
        try{
            Axios.get("https://fakestoreapi.com/products/category/electronics")
            .then((res) => {
                setData(res.data)
            })
        }catch (error) {
            console.error(error);
        }
    }

    if(props.category === "jewelery"){
        try{
            Axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then((res) => {
                setData(res.data)
            })
        }catch (error) {
            console.error(error);
        }
    }

    if(props.category === "All"){
        try{
            Axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
            })
        }catch (error) {
            console.error(error);
        }
    }

    return(
        <>
        <InputField onInputChnage={onInputChnage} value={searchText}/>
        <div className="row mt-5 card-container">
            {data.filter((item) => {
              if(searchText===""){
                return item
              }else if(item.title.toLowerCase().includes(searchText.toLowerCase())){
                return item
              }
            }).map((item) => {
                return(
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card" >
                <img src={item.image} height="300px" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title text-center ">{item.title}</h5 >
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>${item.price}</strong>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                    </p>
                    
                </div>
            </div>
            </div>
            )
        })}
        
        </div>
        </>
    )
}

export default Product
