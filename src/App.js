import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Blog from './routes/Blog'
import About from './routes/About';
import Signin from './Login/Login'
import Register from './routes/Register';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home />} />
         <Route path='/about' element={< About/>} />
       <Route path='/sign_up' element={<Register />} /> 
        <Route path='/login' element={<Signin />} />
        <Route path='/blog' element={<Blog />} /> 
      </Routes>
    </>
  );
}

export default App;
