import React from 'react';
import { Search, Heart, User, ShoppingCart } from 'lucide-react';
import './Header.css';

const Header = () => {
  const categories = [
    "Todas las categorías",
    "Electrónicos", 
    "Ropa y Accesorios",
    "Hogar y Jardín",
    "Deportes",
    "Libros",
    "Juguetes"
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Top bar */}
        <div className="header-top">
          <div className="header-promo">
            <span>Envío gratis en compras mayores a $50</span>
          </div>
          <div className="header-links">
            <span>Ayuda</span>
            <span>Crear cuenta</span>
            <span>Inicia Sesión</span>
          </div>
        </div>

        {/* Main header */}
        <div className="header-main">
          <div className="header-left">
            <h1 className="logo">MStore</h1>
            
            {/* Search bar */}
            <div className="search-container">
              <select className="search-category">
                <option>Todas las categorías</option>
              </select>
              <input 
                type="text" 
                placeholder="Buscar productos, marcas y más"
                className="search-input"
              />
              <button className="search-button">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* User actions */}
          <div className="header-actions">
            <div className="action-item">
              <Heart size={20} />
              <span>Favoritos</span>
            </div>
            <div className="action-item">
              <User size={20} />
              <span>Mi cuenta</span>
            </div>
            <div className="action-item cart">
              <ShoppingCart size={20} />
              <span>Carrito</span>
              <span className="cart-badge">0</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <div className="nav-items">
            {categories.map((category, index) => (
              <button key={index} className="nav-item">
                {category}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;