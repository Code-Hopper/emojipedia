import React, { useState } from 'react'

const DisplatEmojise = (props) => {

    console.log(props)

    let [isEdit, setIsEdit] = useState(false)

    let [newEmojiData , setNewEmojiData] = useState({
        icon: "",
        name:"",
        discription:"",
    })

    let [editIndex , setEditIndex] = useState("")

    let handelClose = () => {
        setIsEdit(false)
    }

    let DisplayEachEmoji = (props) => {

        let handelDelete = () => {
            // alert(`delete called by ${props.index}`)
            props.onDelete(props.index)
        }

        let handelEdit = () => {
            setIsEdit(true)
            setNewEmojiData(props.emoji)
            setEditIndex(props.index)
        }

        return (
            <div key={props.index} className="col-3">
                <div className='card p-4 shadow-lg text-center'>
                    <h2>
                        {props.emoji.icon}
                    </h2>
                    <h3>
                        {props.emoji.name}
                    </h3>
                    <p>
                        {props.emoji.discription}
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
                                    < DisplayEachEmoji emoji={emoji} index={index} onDelete={props.onDelete} editIndex={editIndex}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* calling update form */}

            {
                !isEdit ? "" :  <UpdateForm onClose={handelClose} data={newEmojiData} editIndex={editIndex} onSave={props.onUpdate}/>
            }


        </>
    )
}

let UpdateForm = (props) => {

    let [updatedEmoji , setUpdateEmoji] = useState(props.data)

    let handelUpdateSubmit = (event) =>{
        event.preventDefault()

        console.log(updatedEmoji)

        console.log(props.editIndex)

        props.onSave(props.editIndex , updatedEmoji)

    }

    let handelUpdateChange = (event) =>{

        // alert()

        let name = event.target.name
        let value = event.target.value

        setUpdateEmoji((prev)=>{
            return {...prev, [name] : value}
        })

    }

    
    return (
        <>
            {/* pop section for editing a single emoji */}

            <div className='pop-section-emoji shadow-lg p-3'>
                <div className='row'>
                    <div className="col">
                        <h3>Edit Emoji</h3>
                    </div>
                    <div className="col text-end">
                        <button onClick={props.onClose} className='btn btn-close'></button>
                    </div>
                </div>

                <form onSubmit={handelUpdateSubmit} className='d-flex flex-column gap-3' >

                    <input onChange={handelUpdateChange} className="form-control" placeholder='Emoji' type="text" name='icon' value={updatedEmoji.icon}/>

                    <input onChange={handelUpdateChange} className="form-control" placeholder='Name' type="text" name='name' value={updatedEmoji.name}/>
                    
                    <textarea onChange={handelUpdateChange} className='form-control' placeholder='Emoji Discription' name="discription" id="" cols="30" rows="5" value={updatedEmoji.discription}>

                    </textarea>

                    <div className=''>
                        <button className='btn btn-primary'>Save</button>
                    </div>

                </form>
            </div>

        </>
    )
}


export default DisplatEmojise