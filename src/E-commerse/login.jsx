import React from "react";
import "../E-commerse/login1.css" 
import logo from "..//E-commerse/image/logo-375-89.png"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faUser}from '@fortawesome/free-solid-svg-icons';
import{faLock}from '@fortawesome/free-solid-svg-icons';
import{faArrowLeft}from '@fortawesome/free-solid-svg-icons';
import{ faKey}from '@fortawesome/free-solid-svg-icons';

function Frist(){
    return(
        <>
        <div id="total">
            <div id="loginpage">
                 <div id="one">
                     <img src= {logo}alt="" />
                </div>
                <div id="two">
                    <span className="sign"><FontAwesomeIcon icon={faUser}/>Sign In</span>
                   <input type="text" placeholder="Username"/><FontAwesomeIcon icon={faUser} className="logo2"/>
                    <input type="text" placeholder="Password" /> <FontAwesomeIcon icon={faLock} className="logo3"/>
                    <span id="line"></span>
                      
                    <a href="FrondEnd/React/task2/src/E-commerse/login2.jsx"><FontAwesomeIcon icon={faArrowLeft} />i forgot my password</a> <button><FontAwesomeIcon icon={faKey} />Securekey Login</button>
                 

                 <span id="last"><a href="">Powered By KG Hawes, LLC.</a></span>
                
                
                </div>
        

       </div>









        </div>
         
        </>
    )

}
export default Frist