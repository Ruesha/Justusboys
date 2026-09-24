
import Events from './components/Events'
import Hero from './components/Hero'
import Belt from './components/Belt'
import Mission from './components/Mission'
import {GetInTouch, Hero2 } from './components/bits/Randoms'
import Footer from './components/bits/Footer'
import Carousel from './components/bits/Caurosel'

const App = () => {
  


  return (
    <div>
      <Hero />
      <Belt />
      <Mission />
      <Events />
      <Carousel />
      <Hero2 />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
