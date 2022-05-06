import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Blog from './routes/Blog'
import About from './routes/About';
import Login from './routes/SignIn';
import Register from './routes/Register';


function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home />} />
         <Route path='/About' element={< About/>} />
       <Route path='/sign_up' element={<Register />} /> 
        <Route path='/Signin' element={<Login />} />
        <Route path='/blog' element={<Blog />} /> 
      </Routes>
    </>
  );
}

export default App;
