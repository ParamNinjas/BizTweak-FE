import React from 'react'
import Navbar from '../components/Navbar'
import Footernew from '../components/Footernew'
import Posts from '../components/Posts/Posts'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <Posts/>
            <Footernew />
        </div>
    )
}

export default Blog
