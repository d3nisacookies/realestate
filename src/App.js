import React from 'react';
import {Route, Routes} from "react-router-dom"
import LoginForm from './components/loginForm';
import RegisterForm from './components/register';

function App() {
  return (
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        
        {/* <Route path="/home" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={<SignInPage/>} /> */}
      </Routes>
      </div>
  );
}

export default App;