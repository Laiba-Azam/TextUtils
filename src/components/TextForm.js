
import React, {useState} from 'react'
// jab hum js mai onchange use krte h woh humain akobject  event deta hai usko event .target.value krkay use kre isliay handle mai settext rkha hai warna text area mai kuch typoe nhi hota baki usestate ak state banata hai jismay first variable usestate mai define hota hai or second state k zariyay you can change it

export default function TextForm(props) {
    const made_uppercase=()=>{
        let uppertext=text.toUpperCase()
        settext(uppertext)
        props.setAlert("success","Converted to Uppercase")
}
const made_lowercase=()=>{
    let lowertext=text.toLowerCase()
    settext(lowertext)
    props.setAlert("success","Converted to Lowercase")
}
const made_clear=()=>{
    let clear=''
    settext(clear)
    props.setAlert("success","Text has been cleared")
    
}
const copy=()=>{
    let text=document.getElementById("my-box")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.setAlert("success","Copied to Clipboard")
}
const remove_space=()=>{
    let newtext=text.split(/[ ]+/)
    settext(newtext.join(" "))
    props.setAlert("success","Spaces has been removed")
   
}
    const handle=(event)=>{
        console.log("something")
settext(event.target.value)
}
    const [text,settext]=useState("Enter text here")
  return (
    <div>
        <div className="container mt-4" style={{color:props.mode==="dark"?"white":"black"}}><h2>{props.heading}</h2>

<div className="mb-3">
<textarea className="form-control" id="my-box" value={text} rows="6" onChange={handle}  style={{backgroundColor:props.mode==="dark"?"#212529":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
</div>
<button className="btn btn-dark" disabled={text.length===0} onClick={made_uppercase}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={made_lowercase}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={made_clear}>Clear Textarea</button>
<button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={copy}>Copy text</button>
<button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={remove_space}>Remove Extra Space</button>
</div>
<div className="container mt-4" style={{color:props.mode==="dark"?"white":"black"}}>
    <h2>Your text summary</h2>
    {/* \s ka matlb white space including new line and + mtlb one and more */}
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>
    
    </div>
  )
}
