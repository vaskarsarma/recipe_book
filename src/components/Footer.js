import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            /* <!-- footer --> */
            <div>
                <footer className="py-5">
                    <div className="container py-sm-3">
                        <div className="row footer-grids">
                            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-sm-5 mb-4">
                                <h4 className="mb-4"><span className="fa fa-cutlery"></span> Recipe</h4>
                                <p className="mb-3">Recipe Blog...</p>
                                <h5>Trusted by <span>500k People</span> </h5>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-md-0 mb-sm-5 mb-4">
                                <h4 className="mb-4">Address Info</h4>
                                <p><span className="fa mr-2 fa-map-marker"></span>Recipe Book <span>Dubai, UAE.</span></p>
                                <p className="phone py-2"><span className="fa mr-2 fa-phone"></span> +(971) XXX XXX XXXX </p>
                                <p><span className="fa mr-2 fa-envelope"></span><a href="mailto:info@example.com">info@recipebook.com</a></p>
                            </div>
                            <div className="col-lg-2 col-sm-6 mb-lg-0 mb-sm-5 mb-4">
                                <h4 className="mb-4">Quick Links</h4>
                                <ul>
                                    <li className="my-2"><a href="about.html">About Us</a></li>
                                    <li className="my-2"><a href="services.html">Services</a></li>
                                    <li className=""><a href="contact.html">Contact Us</a></li>                                     
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h4 className="mb-4">Subscribe Us</h4>
                                <p className="mb-3">Subscribe to our newsletter</p>

                                <form action="#" method="post" className="d-flex">
                                    <input type="email" id="email" name="EMAIL" placeholder="Enter your email here" required=""></input>
                                    <button type="submit" className="btn">Subscribe</button>
                                </form>
                                <div className="icon-social mt-3">
                                    <a href="#" className="button-footr">
                                        <span className="fa mx-2 fa-facebook"></span>
                                    </a>
                                    <a href="#" className="button-footr">
                                        <span className="fa mx-2 fa-twitter"></span>
                                    </a>
                                    <a href="#" className="button-footr">
                                        <span className="fa mx-2 fa-dribbble"></span>
                                    </a>
                                    <a href="#" className="button-footr">
                                        <span className="fa mx-2 fa-pinterest"></span>
                                    </a>
                                    <a href="#" className="button-footr">
                                        <span className="fa mx-2 fa-google-plus"></span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- //footer --> */}

                {/* <!-- copyright --> */}
                <div className="copyright">
                    <div className="container py-4">
                        <div className=" text-center">
                            <p>© 2019 Recipe. All Rights Reserved | Design by <a href="#"> Recipe Book Team</a> </p>
                        </div>
                    </div>
                </div>
                {/* <!-- //copyright --> */}

                {/* <!-- move top --> */}
                <div className="move-top text-right">
                    <a href="#home" className="move-top">
                        <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                    </a>
                </div>
                {/* <!-- move top --> */}
            </div>
        );
    }
}