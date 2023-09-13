import React from "react";
import "../App.css";

const Navbar=()=>{
    return(   
<div className="container">
    <div>
        <a href="./"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoo30d61-zjbyTpsYUVpN8EZh2L53C4lbijg&usqp=CAU" class="logo"/></a>
    </div>
    <div className='navItems'>
                        <ul>
                             <li><a href="./">Home</a></li>
                             <li><a href="./">About Us</a></li>
                            <li><a href="./">Contact Us</a></li>
                             <li><a href="./">Cart</a></li>
                        </ul>
    </div>
</div>
    )
}
 export default Navbar;