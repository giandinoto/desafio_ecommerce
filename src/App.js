import React from 'react'
import './App.css';
import { Header } from './components/Header.js'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';  

function App( ) {

  return (
    <div className="App">
      <>
       <Header />
       <Main  />
       <Footer />
      </>
    </div>
  )
}

export default App;