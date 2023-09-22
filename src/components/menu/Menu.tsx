import React, { useState } from 'react';
import { FaHome, FaVideo, FaHeart, FaGamepad,  FaImages, } from 'react-icons/fa';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu">
      <Link
        to="/"
        className={`menu-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleClick('home')}
      >
          <FaHome>
            <Link to="/" />
          </FaHome>
        
      </Link>
      <Link to="/videos"
        className={`menu-item ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => handleClick('search')}
      >
        <FaVideo />
      
      </Link>

      <Link to="/favoritos"
        className={`menu-item ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => handleClick('favorites')}
      >
        <FaHeart />
      </Link>

      <Link 
        to="/notas"
        className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => handleClick('profile')}
      >
        <FaImages />
      </Link>
      <Link 
        to="/juegos"
        className={`menu-item ${activeTab === 'games' ? 'active' : ''}`}
        onClick={() => handleClick('games')}
      >
        <FaGamepad /> 
      </Link>
    </div>
  );
};
export default Menu;
