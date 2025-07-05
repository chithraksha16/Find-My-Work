import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import { Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './Footer';

function Layout() {
  
  
  return (
    <div>
      <Header />
      {/* <Footer/> */}
      
      {/* <Body /> */}
      
      <Outlet />

    </div>
  )
}

export default Layout
