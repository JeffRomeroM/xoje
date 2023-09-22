import React from 'react';
import { Route, Routes } from "react-router-dom"
import Menu  from './components/menu/Menu.tsx'
import  Favorite  from "./components/favorite/Favorite.tsx";
import Arriba from "./components/menuArriba/Arriba.tsx";
import Home from "./components/home/Home.tsx";
import Game from './components/juegos/Game';
import {Video}  from './components/videos/Video.tsx';
import { NotesList } from './components/notas/NotesList.tsx';


function App() {
  
  return (
    <>
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
