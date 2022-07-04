import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './hocks/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registro from "./pages/Registro";
import "./App.css"

import NavBar from './components/NavBar';



const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' />
  }
  return children;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
