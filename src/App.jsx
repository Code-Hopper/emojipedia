import React from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


// importing components
import Header from './components/includes/Header.jsx'
import Footer from './components/includes/Footer.jsx'

import EmojiGrid from './components/sections/EmojiGrid.jsx'

import AddEmoji from './components/sections/AddEmoji.jsx'
const App = () => {
    return (
        <>
            <Header />

            <AddEmoji />

            {/* display all emojies */}

            <EmojiGrid />

            <Footer />
        </>
    )
}

export default App