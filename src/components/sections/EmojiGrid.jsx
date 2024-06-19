import React, { useState } from 'react'

// import sample data from Data.js

import { emojies } from "../Data.js"

let displayEmojies = (props) => {
    return (
        <div key={props.id} className='col-2 p-2 shadow-lg'>
            <div className='row align-items-center'>
                <div className='col-4'>
                    <h1>{props.icon}</h1>
                </div>
                <div className='col'>
                    <span className='fw-bold fs-5'>{props.name}</span>
                </div>
            </div>
            <p>{props.discription}</p>
        </div>
    )
}

const EmojiGrid = (props) => {


    return (
        <>
            <div className='container-fluid'>
                <div className="container">
                    <div className="row gap-3 justify-content-center py-5">

                      
                        {/* display all emojies from the array of emojies */}
                        {
                            props.data.map(displayEmojies)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default EmojiGrid