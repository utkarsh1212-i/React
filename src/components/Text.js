import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");

  //UPPERCASE FUNCTION
  const clickup = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  //LOWERCASE FUNCTION
  const clicklow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  //CLEARTEXT FUNCTION
  const clearText = () => {
    
    setText("");
  };

  const change = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <label for="box" className="form-label"></label>
          <textarea
            className="form-control"
            id="box"
            rows="5"
            value={text}
            onChange={change}
            style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickup}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clicklow}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>Total characters: {text.length}</p>
        <p>Total Words: {text.split(" ").length}</p>
        <p>{0.008 * text.split(" ").length}minute to read</p>
      </div>
    </>
  );
}
