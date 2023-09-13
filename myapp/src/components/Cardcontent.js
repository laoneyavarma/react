import React from "react";
import { img_url } from "../Pictures";
import "../App.css";





 
 const Cardcontent=(props)=>{
   
    const {name,id} = props
    return(
        
        <div className="card-container">

        <div>
            <img src={ img_url }/>
        </div> 
        
        <div>
        <h1>Hai my name is {name}</h1>
        <h2>My id number is {id}</h2>
         </div>
        
        </div>
        
    
    )
}
 export default Cardcontent;