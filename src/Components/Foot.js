import React from 'react'

import './Total.css'

const hi=
{
    textAlign:"center",
    fontFamily:"'Verdana',san-serif",
    fontWeight:"500",
    fontSize:"20px",
    margin:"20px",
    padding:"2px",
    lineHeight:"1.5",
    color:"white"
}
const butto ={
    verticalAlign:"middle",
    backgroundColor:"white",
    margin:"20px",
    maxWidth:"100px",
    borderRadius:"5%"
}
const li=
{
    fontSize:"20px",
    color:"white",
    marginLeft:"2px" 
}
function Foot() 
{
    return (
<div className="foot">
    <h2 style={{hi}}>
        <b>
            Explore your learning skills
        </b>
    </h2>
    <p>
        <strong>We'll Improve your Innovative Thoughts. Subscribe right below your inbox.</strong>
    </p>
    
       
    <input type="text" placeholder="Enter your E-mail" className="inp" /> <br />
    <button type="submit" style={{butto}} className="sub">Submit</button>
    </div>
    )
}

export default Foot