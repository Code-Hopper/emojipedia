import React from 'react'

import Emojies from './DataSheet.js'

const DisplatEmojise = () => {

    let DisplayEachEmoji = (props) => {

        return (
            <div key={props.index} className="col-3">
                <div className='card p-4 shadow-lg text-center'>
                    <h2>{props.emoji.icon}</h2>
                    <h3>{props.emoji.name}</h3>
                    <p>{props.emoji.discription}</p>
                </div>
            </div>
        )
    }

    return (
        <>

            <div className='container-fluid'>
                <div className="container">
                    <div className='row gap-3 justify-content-center'>
                        {
                            Emojies.map((emoji, index) => {
                                return (
                                    < DisplayEachEmoji emoji={emoji} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}


export default DisplatEmojise