import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    {/* Since it's require inside src, the image is only rendering when the component is getting loaded (rather than static loading) */}
                    <Link to="/"> <img src={require('../../images/header-name.png')} alt="logo" /></Link>

                </div>

                <div className="camera-icon">
                    <Link to="addpost"><i className="fa-solid fa-camera camera"></i></Link>
                    {/* <img src={require('../../images/header-camera.png')} alt="camera-icon" /> */}
                </div>

            </div>
        </>
    )
}

export default Header;