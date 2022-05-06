import React from 'react'
import Footernew from '../components/Footernew'
import Navbar from '../components/Navbar'
import About from '../About/About'
import Subscribe from '../../src/components/subscribe/Subscribe'


const Contact = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Subscribe />
            <Footernew />
        </div>
    )
}

export default Contact
