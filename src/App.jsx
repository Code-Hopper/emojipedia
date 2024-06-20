import React, { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


// importing components
import Header from './components/includes/Header.jsx'
import Footer from './components/includes/Footer.jsx'

import EmojiGrid from './components/sections/EmojiGrid.jsx'

import AddEmoji from './components/sections/AddEmoji.jsx'
const App = () => {

    let [emojies, setEmojies] = useState([
        {
            id: 1,
            icon: "🔥",
            name: "Fire Emoji",
            discription: "some discription data !"
        },
        {
            id: 2,
            icon: "👌",
            name: "Best",
            discription: "some discription data best !"
        },
        {
            id: 3,
            icon: "👋",
            name: "Hii",
            discription: "some discription data hii !"
        },
        {
            id: 4,
            icon: "✌️",
            name: "Victory",
            discription: "some discription data Victory !"
        }
    ])


    let callFromAdd = (emoji) => {
        // alert("called from Add Emojies")
        console.log("this is app.jsx and emoji is : ")

        emoji.id = emojies[emojies.length - 1].id + 1

        console.log(emoji)

        setEmojies((prev) => {
            return (
                [...prev, emoji]
            )
        })
    }

    return (
        <>
            <Header />

            <AddEmoji call={callFromAdd} />

            {/* display all emojies */}

            <EmojiGrid data={emojies} />

            <Footer />
        </>
    )
}

export default App