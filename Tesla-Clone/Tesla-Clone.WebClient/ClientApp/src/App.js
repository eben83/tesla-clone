import React, { Component } from 'react';
import Header from "./components/header";
import Home from "./components/home";

import './custom.css'

const App = (props ) => {
  return (
      <>
        <Header />
        <Home />
      </>
  )
}

export default App;