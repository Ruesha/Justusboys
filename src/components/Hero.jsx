
import { FaArrowRight } from 'react-icons/fa'
import Navbar from './bits/Navbar'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-screen">
      <Navbar />

      <div className="hero-dots"></div>
      <div className="hero-glow"></div>
      <div className="hero-vignette"></div>

      <div className="hero-content">
        <div className="hero-floating">
          <span></span>
          A CIRCLE FOR THE REAL ONES
        </div>

        <h1 className="hero-title">
          No Pressure.
          <span>Just Direction.</span>
        </h1>

        <p className="hero-description">
          Just men building men. A safe space for connection,
          expression, and conversations that actually matter.
        </p>

        <div className="hero-btns">
          <button className="join-brotherhood">
            <a href="https://luma.com/8oou1qdo" target="_blank" rel="noopener noreferrer">
              <span>Join the Circle</span>
            </a>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="hero-bottom">
        <span>JUSTUSBOYS</span>
        <span>COMMUNITY • CONNECTION • GROWTH</span>
      </div>
    </section>
  )
}

export default Hero



