import { Router } from './config/router';
import Head from './component/Head';
import Footer from './component/Footer';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.less';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Head />
      <div className="content">
        <Router />
      </div>
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
