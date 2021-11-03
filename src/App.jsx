import './App.css';
import { useState } from 'react';
import Footer from './components/dashboardComponents/Footer';
import TimePunch from './components/dashboardComponents/TimePunch';
import {Route, Router, Routes} from 'react-router-dom';
import User from './components/dashboardComponents/User';
// import {Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/thingy' element={<TimePunch />} />
        <Route path='/other' element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
