import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Product from './views/Product/Product'
import Signin from './views/Signin/Signin'
import Buy from './views/Buy/Buy'
import Myorder from './views/Myorder/Myorder'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
    "path": "/",
    "element": <Home/>
},
{
    "path":"/login",
    "element": <Login/>
},
{
    "path":"/Product",
    "element": <Product/>
},
{
    "path":"/signin",
    "element": <Signin/>
},
{
    "path":"/buy/:id",
    "element": <Buy/>
},
{
    "path":"/myorder",
    "element": <Myorder/>
}

])
root.render(<RouterProvider router={router}/>)