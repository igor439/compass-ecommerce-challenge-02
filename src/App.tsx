import React, { createContext, useState } from 'react';

import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import NavigationProvider from './routers/NavigationContext';




export function App() {



  return (
    <>
        <NavBar/>
          <NavigationProvider>
            <Outlet/>
          </NavigationProvider>
        <Footer/>
    </>
  );
}

export default App;
