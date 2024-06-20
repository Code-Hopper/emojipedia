import React, { useState } from 'react'



const EmojiGrid = (props) => {

    let [isOpen, setIsOpen] = useState(false)


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
                <p>{props.discription.slice(0, 22) + "..."}</p>

                <button className='btn btn-sm btn-primary' onClick={() => { setIsOpen(true) }}>view</button>

                {isOpen ? <EmojiPopUp emoji={props} /> : null}

            </div>
        )
    }

    let EmojiPopUp = (props) => {
        return (
            <div className={isOpen ? "" : "collapse"} id='emoji-pop-up'>
                <div style={{ width: "600px", height: "600px" }} className='bg-dark position-fixed z-3 start-50 top-50 translate-middle d-flex flex-column justify-content-center align-items-center'>
                    <div style={{ fontSize: "10rem" }} className=''>
                        {props.emoji.icon}
                    </div>
                    <div>
                        <h3 className='text-light '>{props.emoji.name}</h3>
                    </div>
                    <div className="text-light">
                        <p className='fs-8 p-5'>{props.emoji.discription}</p>
                    </div>
                    <button className='btn bg-danger btn-close' onClick={() => {
                        setIsOpen(false)
                    }}></button>
                </div>
            </div>
        )
    }

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