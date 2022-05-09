import React from 'react'
import Footernew from '../components/Footernew'
import Navbar from '../components/Navbar'
import About from '../About/About'
import Subscribe from '../../src/components/subscribe/Subscribe'
import Cards from '../../src/components/cards/Cards'



const Contact = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Cards />
            <Subscribe />
            <Footernew />
        </div>
    )
}

export default Contact
