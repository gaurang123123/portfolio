
import './App.css';import React,{ useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Aboutsection from './components/Aboutsection';
import Certificationsection from './components/Certificationsection';
import Myworks from './components/Myworks';
import Contact from './components/Contact';
import Headercomponent from './components/Headercomponent';
import Appbar from './components/Appbar';
import { BrowserRouter } from 'react-router-dom';
import Aboutcard from './components/Aboutcard';


function App() {

  
  return (
    <>
    <Navbar/>
    <Appbar/>
    <Headercomponent/>
    <Aboutcard></Aboutcard>
    <Aboutsection/>
    <Myworks/>
    <Certificationsection/>
    <Contact/>
  <Footer/>
    </>

 
  );
}

export default App;
