// import logo from './static/logo.svg';
import { Router } from './config/router';
import Head from './component/Head';
import Footer from './component/Footer';
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Head />
      <Router />
      <Footer />
    </>
  );
};

export default App;
