import React from 'react'

export default function Alert(props) {
    // this and operate is checking that weather the propdismiss is null or not if yes then no alert will show and if there is some alert in dismiss and the other statment will work
    const capital=(word)=>{
        const small=word.toLowerCase();
        return small.charAt(0).toUpperCase()+small.slice(1)
    }
  return (
      <div style={{height:"50px"}}>{ props.dismiss && <div>
        <div className={`alert alert-${props.dismiss.type} alert-dismissible fade show`} role="alert">
     <strong>{capital(props.dismiss.type)}</strong>:{props.dismiss.message}
      
    </div>  
        </div>}</div>
    
  )
}
