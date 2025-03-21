import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TandC from './pages/TandC'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgImage from "./assets/bg.png";
import { useNavigate } from 'react-router-dom';
import PP from './pages/PP'
import CancellationsRefunds from './pages/CancellationsRefunds'
import ShippingDelivery from './pages/ShippingDelivery'

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/termsandconditions' element={<TandC />} />
        <Route path='/privacypolicy' element={<PP />} />
        <Route path='/cancellationsandrefunds' element={<CancellationsRefunds />} />
        <Route path='/shippinganddelivery' element={<ShippingDelivery />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
