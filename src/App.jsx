import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import NavBar from './components/navBar';
import Home from './pages/index2';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/contacto';
import Indumentaria from './pages/Indumentaria';
import Zapatillas from './pages/zapatillas';
import Carousel from './components/Carousel';
import MainContainer from './components/mainContainer';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <header>
        <NavBar />
        <Carousel />
        <Routes>
          <Route path="/index2" element={<Home />} />
          <Route path="/Indumentaria" element={<Indumentaria />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/zapatillas" element={<Zapatillas />} />
        </Routes>
      </header>      
      <MainContainer text='¡Bienvenido al mundo de la acción y la pasión deportiva! Sumérgete en una experiencia única donde el sudor, la adrenalina y la emoción se combinan para desafiar tus límites y elevar tu espíritu competitivo. Desde los campos de juego hasta las pistas de carrera, nuestro sitio es tu destino para descubrir las últimas noticias, eventos y tendencias en el emocionante mundo del deporte. Únete a una comunidad apasionada de atletas, aficionados y entusiastas que comparten una sola pasión: el amor por el juego. ¿Estás listo para vivir la emoción?' />
      <Footer />
    </Router>
  );
}

export default App;
