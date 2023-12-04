import React,{useState} from 'react'

import axios from 'axios'
import Navbar from './../../components/Navbar/Navbar'
function Login(){
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const Login= async () => {
    const responce = await axios.post('/login', {
      
        email: email,
        password: password
    });
    alert(responce.data.message);
    if(responce.data.success){
        localStorage.setItem('user', JSON.stringify(responce.data.data))
        window.location.href='/'

    }
}
    return(
        <>
        <Navbar/>
        <h1 className="ti-si">Login here</h1>
        <hr className="hrtag"/>
        <div className='si-con'>
            <h1 className='si-ti'>Login</h1>
            <div >
            <img className='let' src={'https://img.icons8.com/?size=30&id=ZkD_s0Lm8ym1&format=png'}/>
            <input className='pop' type='Email'placeholder='Enter  email'
            value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
           
<div >
            <img className='let' src={"https://img.icons8.com/?size=30&id=eJnNkz9k3Xpg&format=png"}/>
            <input className='pop'type='password'placeholder='Enter  password'
            value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            </div>
            <button onClick={Login}className='up-si'>Login</button>
        </div>
       </div>
        </>
    )
}
export default Login