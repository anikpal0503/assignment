import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<>
          <Header />
          <Body />
          <Footer />
        </>} />

      </Routes>
    </div>);
}

export default App;
