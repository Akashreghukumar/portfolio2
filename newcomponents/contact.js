import React from "react"
import "../App.css"

function Contact(){

    function whatsapp()
    {
        <link href="https://www.google.co.in"></link>
    }
    return(
        <>
        
        <div className="form">
        <h1 style={{fontSize:"30px"}}>Contact</h1>
            <label>Name</label>
            <input type="text" required></input>
            <label>Email</label>
            <input type="email" required></input>
            <label>Message</label>
            <textarea rows="5" cols="50" required></textarea>
            <button className="savebutton">Send</button>
        </div>
        <div className="contactsbutton"> 
            <h2 style={{fontSize:"20px"}}>Feel Free to Contact me</h2>
            <a href="https://www.linkedin.com/in/akash-r-97a653180/" target="_blank">
            <button><img style={{height:"50px",width:"50px",borderRadius:"50%"}} src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" onClick={whatsapp}></img></button>
            </a>

            <a href="https://github.com/Akashreghukumar" target="_blank">
            <button><img style={{height:"45px",width:"50px",borderRadius:"50%"}} src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" onClick={whatsapp}></img></button>
            </a>

            <a href="https://www.linkedin.com/in/akash-r-97a653180/" target="_blank">
            <button><img style={{height:"50px",width:"50px",}} src="https://psfonttk.com/wp-content/uploads/2020/09/Instagram-Logo-PNG.png" onClick={whatsapp}></img></button>
            </a>

            <a href="https://github.com/Akashreghukumar" target="_blank">
            <button><img style={{height:"50px",width:"50px"}} src="https://www.silicon.es/wp-content/uploads/2018/04/Gmail_logo.max-2800x2800.png" onClick={whatsapp}></img></button>
            </a>
           
        </div>
        </>
    )

}

export default Contact