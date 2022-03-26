import React from "react";
import "../App.css"
import { BrowserRouter,Switch,Link,Route } from "react-router-dom";
import Home from "./home"
import About from "./about"
import Skills from "./skills"
import Works from "./work"
import Contact from "./contact"




function Navbar(){
    return(
<>
{/* fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] */}
<BrowserRouter>
<div className="navbar" >

<div>
    <img src="https://th.bing.com/th/id/R.499150beb3b9f44df1fce91a3139f6c4?rik=3Sko%2fbnU66D%2fHQ&riu=http%3a%2f%2fakash.kumar.pro%2fimages%2fportfolio%2fakash_logo.png&ehk=7qv4C%2bhm2SObz9LhLZH%2bpnG7hoaudjcgTWnAEv569BM%3d&risl=&pid=ImgRaw&r=0"
    style={{
        height:"50px",
        width:"50px",
        fitImage:"cover",
        borderRadius:"50%"
        

    }}
    ></img>

</div>





<h6 ><Link to="/" exact>Home</Link></h6>
<h6 ><Link to="/about">About</Link></h6>
<h6 ><Link to="/skills">Skills</Link></h6>
<h6 ><Link to="/works">Works</Link></h6>
<h6 ><Link to="/contact">Contact</Link></h6>


{/* </BrowserRouter> */}


</div>


    {/* <BrowserRouter> */}
    <Switch>
<Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/skills" component={Skills}/>
<Route path="/works" component={Works}/>

<Route path="/contact" component={Contact}/>




</Switch>
   


</BrowserRouter>
</>
    )
    
}

export default Navbar