import React from 'react'

const DisplatEmojise = (props) => {

    let DisplayEachEmoji = (props) => {

        let handelDelete = () =>{
            // alert(`delete called by ${props.index}`)
            props.onDelete(props.index)
        }

        return (
            <div key={props.index} className="col-3">
                <div className='card p-4 shadow-lg text-center'>
                    <h2>{props.emoji.icon}</h2>
                    <h3>{props.emoji.name}</h3>
                    <p>{props.emoji.discription}</p>

                    <div className='my-2 d-flex gap-2 justify-content-center align-items-center'>
                        <button onClick={handelDelete} className='btn btn-danger'>
                            Delete
                        </button>
                    </div>

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
                            props.array.map((emoji, index) => {
                                return (
                                    < DisplayEachEmoji emoji={emoji} index={index} onDelete={props.onDelete}/>
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