import { useState, useEffect } from 'react'
import pic1 from '../assets/img/A.jpg'
import pic2 from '../assets/img/q.jpg'
import pic3 from '../assets/img/R.jpg'
import '../Styles/Carousel.css'




function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            src: pic1,
            label: 'Roulette tactics',
            text: ' Here are 2 roulette strategies you need to know.'
        },
        {
            src: pic2,
            label: 'Roulette tactics',
            text: ' Here are 2 roulette strategies you need to know.'
        },
        {
            src: pic3,
            label: 'Roulette tactics',
            text: ' Here are 2 roulette strategies you need to know.'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };


    return (
        <>
            <div className="carousel">
                <div
                    className="carousel-inner"
                    // style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        >
                            <img src={slide.src} alt={`Slide ${index}`} />
                            <div className="carousel-caption">
                                <h3>{slide.label}</h3>
                                <p>{slide.text}</p>
                                <a href="#" className='Bet'><button>Bet now</button></a>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control prev"
                    onClick={() => goToSlide((activeIndex - 1 + slides.length) % slides.length)}
                >
                    &#10094;
                </button>
                <button
                    className="carousel-control next"
                    onClick={() => goToSlide((activeIndex + 1) % slides.length)}
                >
                    &#10095;
                </button>
            </div>
        </>
    );

}

export default Carousel