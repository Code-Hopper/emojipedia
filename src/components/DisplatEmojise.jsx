import React, { useState } from 'react'

const DisplatEmojise = (props) => {

    let DisplayEachEmoji = (props) => {

        let [isEdit , setIsEdit] = useState(false)

        let handelDelete = () => {
            // alert(`delete called by ${props.index}`)
            props.onDelete(props.index)
        }

        let handelEdit = () =>{
            setIsEdit(!isEdit)
        }

        return (
            <div key={props.index} className="col-3">
                <div className='card p-4 shadow-lg text-center'>
                    <h2>
                        <input disabled={ ! isEdit} className='form-control' type="text" value={props.emoji.icon} />
                    </h2>
                    <h3>
                        <input disabled={ ! isEdit} className='form-control' type="text" value={props.emoji.name} />
                    </h3>
                    <p>
                        <input disabled={ ! isEdit} className='form-control' type="text" value={props.emoji.discription} />
                    </p>

                    <div className='my-2 d-flex gap-2 justify-content-center align-items-center'>
                        <button onClick={handelDelete} className='btn btn-danger'>
                            Delete
                        </button>

                        <button onClick={handelEdit} className='btn btn-primary'>
                            Edit
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
                                    < DisplayEachEmoji emoji={emoji} index={index} onDelete={props.onDelete} />
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