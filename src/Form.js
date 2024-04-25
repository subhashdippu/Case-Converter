import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        console.log("Clicked Up")
        setText("You clicked handleUpClick ")
    }
    const handleDelete = () => {
        setText("")
    }
    const handleOnChange = (event) => {
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the text")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert</button>
            <button type="button" class="btn btn-info mx-4" onClick={handleDelete}>Delete Content</button>
        </div>
    )
}
