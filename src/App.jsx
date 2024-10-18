import { useState } from 'react'
import './App.css'
import './index.css'

import Parallax from './Parallax'
import Header from './Header'
import Footer from './Footer'
import ImageSlider from './ImageSlider'
import About from './About'
import Sale from './Sale'
import Review from './Review'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundImage:'linear-gradient(to right, #000000, #388E3C)'}}>
    <Header/>
     <Parallax/>
     <About/>
     <ImageSlider/>
     <Sale/>
     <Review/>
     <Footer/>
    </div>
  )
}

export default App
