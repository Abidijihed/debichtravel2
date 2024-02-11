import React from 'react'
import Test from './Test'
import Navbar from './components/Navbar'
// import Carousel from './components/Carousel'
import Appbar from './components/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm'
import Home from './components/Home'
import Footer from './components/Footer'


export default function App() {
  
  return (
    
    <BrowserRouter>
    <Appbar />
    <Navbar />
    <Routes >
    <Route path="/" element={<Home />}/>
      <Route path="/location" element={<SearchForm />}/>
    </Routes>
     {/* <Test /> */}
     <Footer />
     
    </BrowserRouter>
  )
}
