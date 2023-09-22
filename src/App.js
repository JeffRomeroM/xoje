import React, {useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Menu  from './components/menu/Menu.tsx'
import  Favorite  from "./components/favorite/Favorite.tsx";
import Arriba from "./components/menuArriba/Arriba.tsx";
import Home from "./components/home/Home.tsx";
import Game from './components/juegos/Game';
import {Video}  from './components/videos/Video.tsx';
import { NotesList } from './components/notas/NotesList.tsx';
import './App.css'


function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Verificar si el navegador admite la instalación de aplicaciones web
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        // Mostrar un alert al usuario para instalar la PWA
      
      });
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó instalar la aplicación web.');
        } else {
          console.log('El usuario canceló la instalación.');
        }
        setDeferredPrompt(null);
      });
    }
  };


  //modal
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Ocultar el modal automáticamente después de 3 segundos
    const timeout = setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
    {modalVisible && (
        <div className="modalI">
          <div className="modal-content">
            <h2>Instalar aplicación para mejor experiencia</h2>
            <button onClick={handleInstallClick}>Instalar aplicación</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
      

      <Menu />
      <Arriba />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductItem />}/>  */}
        <Route path="juegos" element={<Game />} />
        <Route path="videos" element={<Video />} />
        <Route path="favoritos" element={<Favorite />} />
        <Route path="notas" element={<NotesList />} />
        {/* <Route path="excel" element={<Excel />} /> */}
        
      </Routes>
    </>
    
  )
}

export default App;
