import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: Landing Page de RRHH */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Puedes añadir rutas adicionales aquí en el futuro (ej. /chatbot o /admin) */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
