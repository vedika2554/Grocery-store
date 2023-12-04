import React, { useEffect, useState } from "react";
import './Home.css'
import axios from 'axios'
import ProductCard from './../../components/Productcard/Productcard'
import Navbar from './../../components/Navbar/Navbar'
import { checkLogin } from "./../../utils/auth";

function Home() {
   
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {

        const responce = await axios.get("/products");
        setProducts(responce?.data?.data)
    }
    
   

useEffect(()=>{
    checkLogin();
loadProducts();
},[])

    return (
        <>
        <Navbar/>
        <div>


            
           <div className="main-card">
           <h1><span className='a'>Smart Gadgets</span><h1 className='b'>Up T0</h1><span className='c'> 30%-70% </span> <span className='g'> Off</span><p className='d'>UP TO 12 MONTHS | EXCHANGE OFFERS</p>
<p className='e'>NO COST EMI | SCHEDULED DELIVERY</p>
<p className='f'>COMBO OFFERS | BIG DISCOUNT</p>
<div>
<button className='btn1'>Buy now</button>
<button className='btn2'>Trending Gadgets</button>
</div></h1>
<img className = "gadimg"src={'https://techhubdirect.com/wp-content/uploads/2020/11/Mobile-Computer-and-Laptop-Repair.png'}/>
           </div>




        <h1 className="tital">Catagory</h1>
        <hr className="hrtag"/>
        <div className="products-container">
        {
            products?.map((product, index)=>{
                const {_id, name, price, description, image} = product;
                return(<ProductCard key={index} id={_id} name={name} price={price}
                    description={description} image={image}/>)
            })
        }
        </div>
        </div>
      
        </>
    )
}

export default Home