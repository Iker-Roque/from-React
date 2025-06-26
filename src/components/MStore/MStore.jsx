import React from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import './MStore.css';

const MStore = () => {
  return (
    <div className="mstore">
      <Header />
      <Carousel />
      
      {/* Sección adicional */}
      <div className="additional-section">
        <div className="category-cards">
          <div className="category-card sports">
            <h3>Deportes</h3>
            <p>Equipamiento deportivo de alta calidad</p>
            <div className="category-icon">🏃‍♂️</div>
          </div>
          
          <div className="category-card gaming">
            <h3>Gaming</h3>
            <p>Lo último en videojuegos y consolas</p>
            <div className="category-icon">🎮</div>
          </div>
          
          <div className="category-card home">
            <h3>Hogar</h3>
            <p>Todo para tu hogar y jardín</p>
            <div className="category-icon">🏠</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MStore;