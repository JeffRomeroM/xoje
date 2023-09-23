import React, { useState, useEffect, useRef } from 'react';
import './Arriba.css'

import { FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuHamburguesa = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef(null);

  // Agregar un manejador de clic al documento global para detectar clics fuera del menú
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAbierto(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <button
        className={`menu-button ${menuAbierto ? 'open' : ''}`}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>
      <h2 className='title'>Xoje</h2>
      <FaUserAstronaut className='avatar'></FaUserAstronaut>

      {menuAbierto && (
        <div className="menuArriba">
          <img src="./lo512.png" alt="hyuk" />
          <ul>
            <li>Inicio</li>
            <li>
            <Link 
              to="/productos"
            >
              Productos
            </Link>
            </li>
            <li>Servicios</li>
            <li>Contacto</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuHamburguesa;
