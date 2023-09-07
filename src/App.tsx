// import logo from './static/logo.svg';
import { Router } from './config/router';
import Head from './component/Head';
import Footer from './component/Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.less';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Router />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
