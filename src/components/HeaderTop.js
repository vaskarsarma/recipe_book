import React, { Component } from 'react';

class HeaderTop extends Component {
    render() {
        return(
           /*  <!-- top header --> */
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="d-lg-flex header-w3_pvt">
                                <li className="mr-lg-3">
                                    <span className="fa fa-envelope-open"></span>
                                    <a href="mailto:info@recipebook.com" className="">info@recipebook.com</a>
                                </li>
                                <li>
                                    <span className="fa fa-phone"></span>
                                    <p className="d-inline">Call Us +971 XXX XXX XXXX</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 header-right-w3_pvt">
                            {/* <ul className="d-lg-flex header-w3_pvt justify-content-lg-end">
                                <li className="">
                                    <span className=""><span className="fas fa-clock"></span>Mon - Sun : 8:30am to 9:30pm</span>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            // <!-- //top header -->
        );
    }
}

export default HeaderTop;