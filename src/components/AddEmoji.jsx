import React, { useState } from 'react'

import Emojies from './DataSheet.js'

const AddEmoji = () => {

    let [emoji , SetEmoji] = useState({
        icon: "",
        name: "",
        discription: ""
    })

    let handelSubmit = (event) =>{
        event.preventDefault()
        console.log(emoji)

        Emojies.push(emoji)

        console.log(Emojies)

    }

    let handelChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        SetEmoji((prev)=>{
            return {...prev , [name]:value}
        })

    }

    return (
        <>
            <div className='container-fluid'>
                <div className="container py-5">
                    <h3>Add New Emojies Here</h3>
                    <form  onSubmit={handelSubmit}>
                        <div className="row gap-2">
                            <div className="col-3">
                                <input onChange={handelChange} className='form-control' type="text" placeholder='Emoji' name="icon" value={emoji.icon} />
                            </div>
                            <div className="col-4">
                                <input onChange={handelChange} className='form-control' type="text" placeholder='Emoji Name' name='name' value={emoji.name} />
                            </div>
                            <div className="col">
                                <input onChange={handelChange} className='form-control' type="text" placeholder='Emoji Discription' name='discription' value={emoji.discription}/>
                            </div>
                        </div>

                        <div className='py-3 d-flex gap-2'>
                            <button className='btn btn-success' type='submit'>Submit</button>
                            <button className='btn btn-danger' type='reset'>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddEmoji