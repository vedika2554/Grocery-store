import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { checkLogin } from './../../utils/auth';
import Navbar from './../../components/Navbar/Navbar'
import './Buy.css'
import axios from 'axios'

export default function Buy(){
    const {id} = useParams();
    const[product, setProduct] = useState({});
    const[quantity, setQuantity] = useState(1);
    const[shippingAddress, setShippingAddress] = useState('');
    const [user, setUser] = useState({});


    const loadProduct = async () => {
        if (!id){
            window.location.href = '/';
        }
        const responce = await axios.get(`/products/${id}`)

        setProduct(responce.data.data);

    };
    
    const incqua = () => {
        setQuantity(quantity + 1);
    };
    const decqua = () => {
        if(quantity > 1){
        setQuantity(quantity - 1);
        }
    };

    useEffect(()=>{
        checkLogin();
        loadProduct();
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    },[]);

    const placeorder = async () => {
        const responce = await axios.post('/order',{
            product: id,
            quantity: quantity,
            shippingAddress: shippingAddress,
            user: user._id

        })
        alert(responce.data.message);
        window.location.href ='/myorder'
    }

    return(
        <>
        <Navbar/>
     <div className='myorder'>
        <h1 className="ti-si">Buy here</h1>
        <hr className="hrtag"/>
        <div>
           <div className='buy-container'>
           <img src={product.image} className='proimg'/>
           <div className='grow'>
            <h1>{product.name}</h1>
            <p className='des-pro'>{product.description}</p>
            <h2 className='ru'>Price : ₹ {product.price}</h2>
            <span className='tx-qan'>Quantity: </span>
            <span onClick={decqua}className='min-btn'>-</span>
            <span className='quan'>{quantity}</span>
            <span onClick={incqua}className='qun-btn'>+</span>

            <div class="star">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            
            </div>


           <div className='add'>
            <input type='text'
           className='ress'
            placeholder='Address of delivery'
            value={shippingAddress}
            onChange={(e) => {
                setShippingAddress(e.target.value)
            }}
        
            />
            <div>
                <button onClick={placeorder}className='now'>Place order</button>
            </div>
            </div>
            
           </div>
           </div>
        </div>
       </div>
        </>
    )
}