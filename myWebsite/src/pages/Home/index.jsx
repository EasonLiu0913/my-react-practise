import React, { useState, useEffect, useRef } from 'react';
import { Container } from './styled';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

export default function Home() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [carouselMoveX, setCarouselMoveX] = useState(0);
    let carousel = useRef(null);

    useEffect(() => {
        let myInterval = null;

        function startInterval() {
            myInterval = setInterval(() => {
                setCarouselIndex((carouselIndex) => (carouselIndex + 1) % 5);
            }, 3000);
        }

        function mouseEnter() {
            clearInterval(myInterval);
        }

        function mouseLeave() {
            startInterval();
        }

        carousel.current.addEventListener('mouseenter', mouseEnter);
        carousel.current.addEventListener('mouseleave', mouseLeave);

        startInterval();
        return () => {
            clearInterval(myInterval);

            if (carousel.current) {
                carousel.current.removeEventListener('mouseenter', mouseEnter);
                carousel.current.removeEventListener('mouseleave', mouseLeave);
            }
        };
    }, []);

    function handlePrevPage() {
        setCarouselIndex(carouselIndex - 1 < 0 ? 4 : carouselIndex - 1);
    }

    function handleNextPage() {
        setCarouselIndex(carouselIndex + 1 > 4 ? 0 : carouselIndex + 1);
    }

    return (
        <div
            style={{
                background: 'linear-gradient(135deg,lightblue,lightpink)',
                minHeight: '100vh',
            }}
        >
            <Container>
                <div className="carousel" ref={carousel}>
                    <ul
                        className="img-list"
                        style={{
                            transform: `translateX(-${
                                carouselIndex *
                                    (carousel.current &&
                                        carousel.current.offsetWidth) +
                                2
                            }px)`,
                            transition: '1s',
                        }}
                    >
                        <li>
                            <img src="/carousel-imgs/1.jpg" alt="" />
                        </li>
                        <li>
                            <img src="/carousel-imgs/2.jpg" alt="" />
                        </li>
                        <li>
                            <img src="/carousel-imgs/3.jpg" alt="" />
                        </li>
                        <li>
                            <img src="/carousel-imgs/4.jpg" alt="" />
                        </li>
                        <li>
                            <img src="/carousel-imgs/5.jpg" alt="" />
                        </li>
                    </ul>

                    <div className="prevPage" onClick={handlePrevPage}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </div>

                    <div className="nextPage" onClick={handleNextPage}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
