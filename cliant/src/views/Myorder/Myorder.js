import axios from 'axios';
import './Myorder.css'
import React, { useEffect, useState } from 'react'
import Navbar from './../../components/Navbar/Navbar'

function Myorders(){
    const [orders, setOrders] = useState([]);

    const fetchOrders = async()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`/orders?id=${user._id}`)
        setOrders(response?.data?.data);
    }
    useEffect(()=>{
        fetchOrders();
    },[]);
    return(
        <>
<Navbar/>
<h1 className="ti-si">Your orders</h1>
        <hr className="hrtag"/>
        <div>
         
            <div className='myorer'>
            {
                orders?.map((order, index)=>{
                    const {product, quantity, shippingAddress}=order;
                    return(<div key={index} className='ordercard'>
                        <img className='orimg' src={product.image}/>
                        <h2 className='orna'>{product.name}</h2>
                        <h4 className='orpri'> Price: {product.price}*{quantity}={product.price*quantity}</h4>
                        <h4 className='oradd'>Address : {shippingAddress}</h4>


                    </div>)
                })
            }
            </div>
        </div>
        </>
    )
}
export default Myorders