import { useEffect, useState } from 'react';
import image1 from '@assets/image_1758133656734.png';
import image2 from '@assets/image_1758133660881.png';
import image3 from '@assets/image_1758133664761.png';
import image4 from '@assets/image_1758133668503.png';
import image5 from '@assets/image_1758133672255.png';

interface TimeData {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  hours: number;
  minutes: number;
}

export default function Home() {
  const [timeData, setTimeData] = useState<TimeData>({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
    hours: 0,
    minutes: 0
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Anniversary date: September 20, 1975
  const anniversaryDate = new Date('1975-09-20T00:00:00');
  
  // Image array with all provided photos
  const images = [
    { src: image1, alt: "Joel e Sandra - Memória especial" },
    { src: image2, alt: "Joel e Sandra na natureza" },
    { src: image3, alt: "Joel e Sandra - Momento íntimo" },
    { src: image4, alt: "Joel e Sandra com a família" },
    { src: image5, alt: "Joel e Sandra - Celebração" }
  ];
  
  const totalSlides = images.length;
  
  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();
      const timeDifference = now.getTime() - anniversaryDate.getTime();
      
      // Calculate years, months, days
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      
      // Calculate total time
      const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeData({
        years,
        months,
        days,
        totalDays,
        hours,
        minutes
      });
    };
    
    updateCounters();
    const interval = setInterval(updateCounters, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Auto-advance carousel every 4 seconds
    const carouselInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(carouselInterval);
  }, [totalSlides]);
  
  useEffect(() => {
    // Create background hearts periodically
    const createBackgroundHeart = () => {
      const heart = document.createElement('div');
      heart.innerHTML = '💛';
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 6 + 's';
      heart.style.animationDuration = (6 + Math.random() * 4) + 's';
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 10000);
    };
    
    const backgroundHeartsInterval = setInterval(createBackgroundHeart, 3000);
    
    // Create some initial background hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createBackgroundHeart, i * 1000);
    }
    
    return () => clearInterval(backgroundHeartsInterval);
  }, []);
  
  const createHeart = () => {
    const heartsContainer = document.getElementById('floatingHearts');
    if (!heartsContainer) return;
    
    const heart = document.createElement('div');
    heart.innerHTML = '💛';
    heart.className = 'animated-heart';
    heart.style.left = (Math.random() * (window.innerWidth - 60)) + 'px';
    heart.style.top = (Math.random() * (window.innerHeight - 100) + 50) + 'px';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 3000);
  };
  
  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <>
      {/* Floating hearts background */}
      <div className="floating-hearts-container" id="floatingHearts"></div>

      <div className="container">
        <header className="header">
          <h1 className="title">Joel e Sandra</h1>
          <h2 className="subtitle">Bodas de Ouro - 50 Anos</h2>
          <p className="date-subtitle">20 de Setembro de 1975</p>
        </header>

        <section className="counters-section">
          <div className="counter-card">
            <h3 className="counter-title">Juntos há</h3>
            <div className="counter-display">
              <div className="time-unit">
                <span className="time-number" data-testid="years-counter">{timeData.years}</span>
                <span className="time-label">Anos</span>
              </div>
              <div className="time-unit">
                <span className="time-number" data-testid="months-counter">{timeData.months}</span>
                <span className="time-label">Meses</span>
              </div>
              <div className="time-unit">
                <span className="time-number" data-testid="days-counter">{timeData.days}</span>
                <span className="time-label">Dias</span>
              </div>
            </div>
          </div>

          <div className="counter-card">
            <h3 className="counter-title">Tempo total</h3>
            <div className="counter-display">
              <div className="time-unit">
                <span className="time-number" data-testid="total-days-counter">{timeData.totalDays.toLocaleString()}</span>
                <span className="time-label">Dias</span>
              </div>
              <div className="time-unit">
                <span className="time-number" data-testid="hours-counter">{timeData.hours}</span>
                <span className="time-label">Horas</span>
              </div>
              <div className="time-unit">
                <span className="time-number" data-testid="minutes-counter">{timeData.minutes}</span>
                <span className="time-label">Minutos</span>
              </div>
            </div>
          </div>
        </section>

        <section className="music-section">
          <h2 className="music-title">Nossa Música</h2>
          <div className="spotify-container">
            <iframe 
              className="spotify-embed"
              src="https://open.spotify.com/embed/track/5ZOlZNNVHkCVz3qGL4wpsE?utm_source=generator&theme=0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              data-testid="spotify-player"
            />
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="gallery-title">Nossas Memórias</h2>
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  data-testid={`carousel-slide-${index}`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => showSlide(index)}
                  data-testid={`carousel-indicator-${index}`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="love-declaration">
          <p className="declaration-text">
            Cinquenta anos de amor, cumplicidade e companheirismo. Joel e Sandra construíram uma história linda, repleta de momentos especiais, desafios superados juntos e um amor que apenas cresceu com o passar dos anos. Meio século de união que serviu de inspiração para todos ao redor, mostrando que o verdadeiro amor resiste ao tempo e se fortalece a cada dia. Através das décadas, vocês provaram que o casamento é uma jornada maravilhosa quando trilhada com respeito, carinho e dedicação mútua. Que esta celebração das Bodas de Ouro seja apenas o início de muitos outros anos de felicidade, saúde e amor compartilhado. Vocês são um exemplo de que o amor verdadeiro existe e perdura para sempre.
          </p>
          <div className="signature">
            Parabéns pelos 50 anos! 💛
          </div>
        </div>

        <div className="heart-button-section">
          <button 
            className="hearts-btn" 
            onClick={createHeart}
            data-testid="button-create-heart"
          >
            ❤️ Espalhar Amor
          </button>
        </div>
      </div>
    </>
  );
}
