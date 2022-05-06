import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Blog from './routes/Blog'
import About from './routes/About';
import Signin from './routes/Sign In'
import Register from './routes/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={< About/>} />
       <Route path='/Register' element={<Register />} /> 
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
