import React from "react";
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
const Headers =()=>{
    return(
        <>
          <header>
              <div className="container-fluid">
                   <div className="row">
                      <div className="col-sm-2">
                         <img src={Logo}/>
                      </div>
                   </div>
              </div>
          </header>
        </>
    )
}
export default Headers;