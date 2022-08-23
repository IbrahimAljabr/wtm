import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
          <div className="App">
            <header className="App-header">
              <h1 >
                Weather App
              </h1>
            </header> 
        
            <div className="body">
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/sign-up" element={<SignUp />}/>
                </Routes>
              </BrowserRouter>
            </div>

            <footer className="App-footer">@ Weather 2021, all rights reserved</footer>
          </div> 
  );
}

export default App;
