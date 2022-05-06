import { StylesProvider } from '@material-ui/core'
import React from 'react'
import Footernew from '../components/Footernew'
import Navbar from '../components/Navbar'
import '../components/NavbarStyles.css'
// import Slider from '../components/Navbar'
import Header from '../components/header/Header'
import '../components/header/Header.css'
import Subscribe from '../components/subscribe/Subscribe'
import HeroImage from '../components/HeroImage'

const Home = () => {
    return (
        <div>
            <Navbar />
           <Header />
           <Subscribe />
            <Footernew/>
        </div>
    )
}

export default Home
