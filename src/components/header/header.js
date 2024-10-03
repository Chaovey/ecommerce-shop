import React from "react";
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
const Header = () => {
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <img src={Logo} />
                        </div>

                        {/* headerSearch start here */}
                        <div className='col-sm-5'>
                            <div className="headerSearch d-flex align-items-center">
                                <div className="selecrDrop cursor">
                                    All Categories
                                </div>

                                <div className="search">
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                        {/* headerSearch start here */}


                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;