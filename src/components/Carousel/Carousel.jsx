import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Cyber Monday",
      subtitle: "31 de octubre, 1 y 2 de noviembre",
      discount: "50% OFF",
      feature: "Cuotas sin interés",
      bgClass: "slide-bg-1"
    },
    {
      id: 2,
      title: "Black Friday",
      subtitle: "Ofertas increíbles todo el fin de semana",
      discount: "70% OFF",
      feature: "Envío gratis",
      bgClass: "slide-bg-2"
    },
    {
      id: 3,
      title: "Liquidación",
      subtitle: "Últimas unidades con descuentos únicos",
      discount: "40% OFF",
      feature: "Sin interés",
      bgClass: "slide-bg-3"
    }
  ];

  // Duplicamos el primer slide al final para el efecto infinito
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
  const timer = setInterval(() => {
    if (currentSlide === slides.length) {
      setTransition(false);
      setCurrentSlide(0);
      setTimeout(() => {
        setTransition(true);
        setCurrentSlide(1);
      }, 20);
    } else {
      setCurrentSlide((prev) => prev + 1);
      setTransition(true);
    }
  }, 5000);
  return () => clearInterval(timer);
}, [currentSlide, slides.length]);

  useEffect(() => {
  if (currentSlide === slides.length) {
    const timeout = setTimeout(() => {
      setTransition(false);
      setCurrentSlide(0);
    }, 500);
    return () => clearTimeout(timeout);
  } else {
    setTransition(true);
  }
}, [currentSlide, slides.length]);

  const nextSlide = () => {
  if (currentSlide === slides.length) {
    // Si estamos en el duplicado, saltamos al primero sin transición
    setTransition(false);
    setCurrentSlide(0);
    // Espera un frame antes de volver a activar la transición y avanzar
    setTimeout(() => {
      setTransition(true);
      setCurrentSlide(1);
    }, 20);
  } else {
    setCurrentSlide((prev) => prev + 1);
    setTransition(true);
  }
};
  const prevSlide = () => {
  if (currentSlide === 0) {
    setTransition(false);
    setCurrentSlide(slides.length - 1);
    setTimeout(() => {
      setTransition(true);
    }, 20);
  } else {
    setCurrentSlide((prev) => prev - 1);
    setTransition(true);
  }
};

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: transition ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedSlides.map((slide, idx) => (
            <div key={idx} className={`carousel-slide ${slide.bgClass}`}>
              <div className="slide-content">
                <div className="slide-left">
                  <div className="slide-icons">
                    <div className="icon-planet"></div>
                    <div className="slide-decorations">
                      ⭐ ✨ 💎
                    </div>
                  </div>
                  <h2 className="slide-title">{slide.title}</h2>
                  <h3 className="slide-subtitle">{slide.subtitle}</h3>
                  <div className="slide-offer">
                    <div className="discount">{slide.discount}</div>
                    <div className="feature">
                      <div className="feature-icon"></div>
                      <span>+{slide.feature}</span>
                    </div>
                  </div>
                </div>
                <div className="slide-products">
                  <div className="product-item refrigerator">
                    <div className="product-main"></div>
                    <div className="product-detail"></div>
                  </div>
                  <div className="product-item washer">
                    <div className="washer-drum">
                      <div className="drum-inner"></div>
                    </div>
                  </div>
                  <div className="product-item tv">
                    <div className="tv-screen">
                      <div className="tv-content">CURVED<br/>GAMING<br/>MONITOR</div>
                    </div>
                  </div>
                </div>
                <div className="slide-stars">
                  <span className="star star-1">✨</span>
                  <span className="star star-2">⭐</span>
                  <span className="star star-3">💎</span>
                  <span className="star star-4">✨</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="carousel-btn carousel-btn-prev">
          <ChevronLeft size={24} />
        </button>
        
        <button onClick={nextSlide} className="carousel-btn carousel-btn-next">
          <ChevronRight size={24} />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`indicator ${currentSlide % slides.length === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;