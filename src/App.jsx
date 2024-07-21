import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Expertise from './Expertise';
import Footer from './Footer';
import Contact from './Contact';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
   <div>
   <Nav/>
   <Home/>
   <About/>
   <Portfolio/>
   <Expertise/>
   <Contact/>
   <Footer/>
    
   </div>
   <Toaster/>
   </>
  );
};

export default App;
