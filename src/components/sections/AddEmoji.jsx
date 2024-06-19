import React from 'react'
import { useState } from 'react'

import {emojies} from "../Data.js"

const AddEmoji = (props) => {


  let [emojiData, setEmojiData] = useState({
    icon: "",
    name: "",
    discription: ""
  })

  let handelInputChange = (e) => {

    console.log(e.target.name + " : " + e.target.value)

    // let name = e.target.name
    // let value = e.target.value

    // setEmojiData((prev) => {
    //   return ({
    //     ...prev, [name]: value
    //   })
    // })

    let { name, value } = e.target
    setEmojiData(prev => ({ ...prev, [name]: value })) //single line return 

  }

  let handelSubmitForm = (e) => {
    e.preventDefault()
    // emojies.unshift(emojiData)
    // console.log(emojies)
    console.log(emojiData)
    props.call(emojiData)
  }

  return (
    <>
      {/*  re-render the emoji grid */}

      <div className="container-fluid">
        <div className="container">
          <h3 className='text-center mt-5'>Add Emoji Data</h3>
          <form onSubmit={handelSubmitForm}>
            <div className='d-flex gap-3 py-5'>
              <input className="form-control" onChange={handelInputChange} type="text" name='icon' value={emojiData.icon} placeholder='Emoji Icon' />
              <input className="form-control" onChange={handelInputChange} type="text" name='name' value={emojiData.name} placeholder='Emoji Name' />
              <input className="form-control" onChange={handelInputChange} type="text" name='discription' value={emojiData.discription} placeholder='Emoji Discription' />
            </div>
            <div className='d-block text-center'>
              <button type='submit' className='btn btn-success'>Add Emoji</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default AddEmoji