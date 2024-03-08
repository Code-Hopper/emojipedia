import React, { useState } from 'react'

// import bootstarp for all components

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// importing components style
import "./components/style.css"

import Navbar from './components/Navbar'
import AddEmoji from './components/AddEmoji'
import DisplatEmojise from './components/DisplatEmojise'

const App = () => {

  let [emojies , setEmojies] = useState([])

  let DeleteEmoji = (id) =>{
    alert(id)

    setEmojies(()=>{
      return emojies.filter((emoji,index)=>{
        return id != index
      })
    })

  } 

  return (
    <>
        <Navbar />
        <AddEmoji array={emojies} arrayHandeler={setEmojies}/>
        <DisplatEmojise array={emojies} onDelete={DeleteEmoji} />
    </>
  )
}

export default App