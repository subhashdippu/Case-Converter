import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        console.log("Clicked Up")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleLowClick = () => {
        console.log("Clicked Up")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case", "warning")
    }
    const handleDelete = () => {
        setText(" ")
        props.showAlert("Deleted the content", "danger")
    }
    const handleOnChange = (event) => {
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the text")
    return (
        <>
            <div className='container'>
                <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>{props.heading}</h1>
                </div>

                <div className="container mb-3 ">
                    <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className='btn btn-primary mx-4' onClick={handleUpClick}>UpperCase</button>
                <button className='btn btn-primary mx-4' onClick={handleLowClick}>Lower Case</button>
                <button type="button" class="btn btn-info mx-4" onClick={handleDelete}>Delete Content</button>
                <div className='container my-4' style={{ color: props.mode === "dark" ? "white" : "black" }} >
                    <h1>Your Text Summary</h1>
                    <p>{text.split(' ').length} word and {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                    <h2>Preview</h2>
                    <p>{text.length > 2 ? text : "Enter the text"}</p>
                </div>
            </div>
        </>
    )
}
