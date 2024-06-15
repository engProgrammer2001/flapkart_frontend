import React from 'react'
import Navigation from '../customer/components/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepag/Homepage'
import Aboutpage from '../Pages/About/Aboutpage'
import ContactUs from '../Pages/ContactUs/ContactUs'
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Cart from '../customer/components/Cart/Cart'
import Admin from '../Admin/components/Admin'

const Routers = () => {



  return (
    <div>
        <div>
            <Navigation />
        </div>
        <div className=''>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/home' element={<Homepage />}></Route>
                <Route path='/about' element={<Aboutpage />}></Route>
                <Route path='/contact' element={<ContactUs />}></Route>
                <Route path='/contact' element={<ContactUs />}></Route>
                <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/cart' element={<Cart />}></Route>

                <Route path='/admin/ashok' element={<Admin />}></Route>
                
            </Routes>
        </div>
    </div>
  )
}

export default Routers;