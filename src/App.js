import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginDoc from './components/LoginDoc';
import LoginPatient from './components/LoginPatient';

function App() {
  return (
    <div className="App">
        {/* <LoginDoc/>
        <LoginPatient/> */}
        <BrowserRouter>
        <Routes>
        {/* <Route exact path ="/" element={LoginDoc} /> */}
        <Route exact path="/" element={<LoginDoc />} />
        <Route  path="/pat" element={<LoginPatient />} />
        <Route  path="/doc" element={<LoginDoc />} />
        {/* <Route path ="/pat" element={LoginPatient} /> */}
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
