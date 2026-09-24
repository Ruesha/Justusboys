import { useState, useEffect, useCallback } from "react";
import "./Caurosel.css";

import image1 from "../../assets/image_01.png";
import image2 from "../../assets/image_02.png";
import image3 from "../../assets/image_033.png";
import image4 from "../../assets/image_04.png";
import image5 from "../../assets/image_05.png";
import image6 from "../../assets/image_06.png";
import image7 from "../../assets/download.jpg";
import image8 from "../../assets/new.jpg";
import image9 from "../../assets/image_09.png";

const IMAGES = [
  { src: image1, caption: "Circle & Unity" },
  { src: image2, caption: "Real Talk. Real Men. Real Growth." },
  { src: image3, caption: "Lifting Each Other Up" },
  { src: image4, caption: "Learning Together" },
  { src: image5, caption: "Fists United" },
  { src: image6, caption: "Just Us Boys" },
  { src: image7, caption: "Building Better Men. Stronger Communities." },
  { src: image8, caption: "Standing Together" },
  { src: image9, caption: "Grow Together. Go Further." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next, direction) => {
      if (animating) return;

      setDir(direction);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const prev = () =>
    go((current - 1 + IMAGES.length) % IMAGES.length, -1);

  const next = () =>
    go((current + 1) % IMAGES.length, 1);

  useEffect(() => {
    const t = setInterval(() => {
      go((current + 1) % IMAGES.length, 1);
    }, 4000);

    return () => clearInterval(t);
  }, [current, go]);

  return (
    <div className="carousel-page">
      {/* Background layers */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="carousel-wrapper">
        <img
          key={current}
          src={IMAGES[current].src}
          alt={IMAGES[current].caption}
          className={`carousel-image ${animating ? "animating" : ""}`}
          style={{ "--dir": dir }}
        />

        <div className="carousel-caption">
          <p>{IMAGES[current].caption}</p>
        </div>

        <button className="nav left" onClick={prev} aria-label="Previous">
          ‹
        </button>

        <button className="nav right" onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      <div className="dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            className={`dot ${i === current ? "active" : ""}`}
          />
        ))}
      </div>

      <p className="counter">
        {current + 1} / {IMAGES.length}
      </p>
    </div>
  );
}