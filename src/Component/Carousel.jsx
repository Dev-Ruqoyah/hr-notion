// Carousel.js
import React, { useState, useEffect } from 'react';
import site from '../Image/site.webp'
import project from '../Image/projects.png'
import ai from '../Image/ai.png'

const Carousel = () => {
    const images = [
        site,
        project,
        ai
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [images.length]);

    return (
        <div className="relative w-full shadow container mx-auto my-10 overflow-hidden">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-screen rounded-lg  object-cover"
            />
        </div>
    );
};

export default Carousel;
