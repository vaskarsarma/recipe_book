import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
        /* <!-- //header --> */
        <header className="py-sm-3 pt-3 pb-2">
            <div className="container">
                    <div id="logo">
                        <h1> <a href="index.html"><span className="fa fa-cutlery" aria-hidden="true"></span>Recipe-Book</a></h1>
                    </div>
                {/* <!-- nav --> */}
                <nav className="d-lg-flex">
        
                    <label for="drop" className="toggle"><span className="fa fa-bars"></span></label>
                    <input type="checkbox" id="drop" />                    
                    <ul className="menu mt-2 ml-auto">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li className=""><a href="about.html">About Us</a></li>
                        <li className=""><a href="contact.html">Contact Us</a></li> 
                        <li className=""><a href="login.html">Login</a></li>
                    </ul>  

                    {/* Post Login */}
                    {/* <ul className="menu mt-2 ml-auto">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li className=""><a href="gallery.html">My Recipe</a></li>                        
                        <li className=""><a href="contact.html">Approve</a></li>  
                        <li className=""><a href="logout.html">Logout</a></li>
                    </ul> */} 
                    {/* Post Login */}
                </nav>
                <div className="clear"></div>
                {/* <!-- //nav --> */}
            </div>
        </header>
        /* <!-- //header --> */
        );
    }
}

export default Header;