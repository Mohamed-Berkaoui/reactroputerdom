import React from 'react'

function Modal( {text,setShowModal}) {
  return (
    <div className='modal'>
        <p onClick={()=>setShowModal("")}>x</p>
        <h2>alert :</h2>
        <p>{text}</p>
    </div>
  )
}

export default Modal