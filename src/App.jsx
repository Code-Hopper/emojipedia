import React from 'react'

// import bootstarp for all components

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// importing components style
import "./components/style.css"

import Navbar from './components/Navbar'
import AddEmoji from './components/AddEmoji'
import DisplatEmojise from './components/DisplatEmojise'

const App = () => {
  return (
    <>
        <Navbar />
        <AddEmoji />
        <DisplatEmojise />
    </>
  )
}

export default App