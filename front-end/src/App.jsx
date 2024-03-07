import React from 'react'
import {Header,Info,Footer} from './components'
import { WhatsappLogo } from './images'

const App = () => {
  return <>
  <Header />
  <Info />
  <Footer />
  <div class="fixed-bottom right-100 p-3" style={{zindex:"6",left:"initial"}}>
    <a href="https://wa.me/918861619973?text=Hello, I have a question about Medical Mitra" target="_blank">
      <img src={WhatsappLogo} width="60" />
    </a>
  </div>
  </>
}

export default App