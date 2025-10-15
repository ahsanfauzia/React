import React, { useState } from 'react';

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked +text");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked +text");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    console.log("Clear was clicked +text");
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById("myText");
    navigator.clipboard.writeText(text.value);
    alert("Text copied to clipboard!");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

  const [text, setText] = useState('Enter your text here');

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myText"
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Clear Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter(word => word.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter(word => word.length !== 0).length} Minutes read</p>
        <h4>{text}</h4>
      </div>
    </>
  );
}
