import React, {useState} from 'react'
import axios from 'axios'
import Navbar from './../../components/Navbar/Navbar'
import imgcall from './../../components/Image/icons8-call-30.png'
import './Sihnin.css'
function Signin(){

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [mobile, setMobile] = useState('')
const [password, setPassword] = useState('')


const Signup = async () => {
    const responce = await axios.post('/signup', {
        name: name,
        email: email,
        mobile: mobile,
        password: password
    });
    if(responce.data.success){
        alert(responce.data.message);
        window.location.href='/login'

    }
}

    return(
        <>
        <Navbar/>
        <h1 className="ti-si">Signup here</h1>
        <hr className="hrtag"/>
        <div className='si-con'>
            <h1 className='si-ti'>Signup</h1>
            <div >
            <img className='let' src={'https://img.icons8.com/?size=30&id=nuMODtuVLj4A&format=png'}/>
            <input className='pop' type='text'placeholder='Enter  name'
            value={name} onChange={(e)=>{
               setName(e.target.value) 
            }}/>
            </div>
            <div >
            <img className='let' src={'https://img.icons8.com/?size=30&id=ZkD_s0Lm8ym1&format=png'}/>
            <input className='pop' type='Email'placeholder='Enter  email'
            value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            </div>
            <div >
            <img className='let' src={imgcall}/> 
            <input className='pop'type='tel'placeholder='Enter  mobile'
            value={mobile} onChange={(e)=>{
                setMobile(e.target.value)
            }}/> 
</div>
<div >
            <img className='let' src={"https://img.icons8.com/?size=30&id=eJnNkz9k3Xpg&format=png"}/>
            <input className='pop'type='password'placeholder='Enter  password'
            value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            </div>
            <button onClick={Signup}className='up-si'>Signup</button>
        </div>
        </>
    )
}
export default Signin