import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {


    const handleUpClick=()=>{
        console.log("upper case was clicked "+text);
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleloClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }

    const handleOnChange =(event)=>{
        // console.log(" handleOnChange  was clicked"+ text);
        console.log(text)
        setText(event.target.value)  // to get the value inside the text area to the variable 'text'  
    }
    const [text, setText]= useState(' Enter text here2 ');
    // setText("this is new text") // to update the "text" containing 'Enter text here2'

    return (
        <>
<div className='container'>

<h1>{props.heading}</h1>
<div className="mb-3">
<label className="form-label">Text area</label>
<textarea  className="form-control" value={text}  onChange={handleOnChange} id="myBox"  rows="10"  ></textarea>

</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handleloClick} >Convert to lower case</button>

</div>

<div className="container my-2">
    <h1>Text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08*text.split(" ").length} minutes to read words </p>

<h2>Preview</h2>
<p>{text}</p>

</div>
</>
  )
}
