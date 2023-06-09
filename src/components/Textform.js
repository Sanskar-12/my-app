import React, {useState}from 'react'

export default function Textform(props) {

    let handleUpclick =()=>{
       
        let newText=Text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }

    let handleLoclick =()=>{
        let newText=Text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }

    let handleclearclick =()=>{
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    let HandleOnchange =(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const [Text, setText] = useState('');
    // text="new text" Wrong way to set the text
    // setText("new text") right way to set the text
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <div className="container" >
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" id="MyBox" value={Text} onChange={HandleOnchange} rows="8" style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" disabled={Text.length===0} onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={Text.length===0} onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={Text.length===0} onClick={handleclearclick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>Your Text summary</h1>
            <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
            <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes taken in reading the sentence</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Nothing to Preview"}</p>
        </div>
    </div>
    </>
  );
}
