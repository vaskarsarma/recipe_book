import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            /* < !--blog --> */
            <section className="blog py-5" >
                <div className="container py-md-3" >
                    <h2 className="heading text-center mb-sm-5 mb-4">Recipe Blog </h2>
                    <div className="row blog-grids head">
                        <div className="col-lg-7 mb-lg-5 blog-img1">
                            <img src="images/blog1.jpg" alt="" className="img-fluid" />
                            <a href="single.html">Blog #1</a>
                        </div>
                        <div className="col-lg-5 mb-lg-5 mb-4">
                            <h5>March 3, 2019.</h5>
                            <h4 className="my-3">Nullam dui mi, vulputate ac</h4>
                            <p className="my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
				 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices morbi posuere cubilia Curae; Curabitur quis luctus lectus.</p>
                            <a href="single.html" className="btn-banner"> View Post </a>
                        </div>
                        <div className="col-lg-5 mb-lg-5 mb-4">
                            <h5>March 3, 2019.</h5>
                            <h4 className="my-3">Nullam dui mi, vulputate ac</h4>
                            <p className="my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
				 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices morbi posuere cubilia Curae; Curabitur quis luctus lectus.</p>
                            <a href="single.html" className="btn-banner"> View Post </a>
                        </div>
                        <div className="col-lg-7 mb-5 blog-img2">
                            <img src="images/blog2.jpg" alt="" className="img-fluid" />
                            <a href="single.html">Blog #2</a>
                        </div>
                        <div className="col-lg-7 mb-lg-5 blog-img1">
                            <img src="images/blog1.jpg" alt="" className="img-fluid" />
                            <a href="single.html">Blog #3</a>
                        </div>
                        <div className="col-lg-5 mb-lg-5 mb-4">
                            <h5>March 3, 2019.</h5>
                            <h4 className="my-3">Nullam dui mi, vulputate ac</h4>
                            <p className="my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
				 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices morbi posuere cubilia Curae; Curabitur quis luctus lectus.</p>
                            <a href="single.html" className="btn-banner"> View Post </a>
                        </div>
                        <div className="col-lg-5 mb-lg-5 mb-4">
                            <h5>March 3, 2019.</h5>
                            <h4 className="my-3">Nullam dui mi, vulputate ac</h4>
                            <p className="my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
				 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices morbi posuere cubilia Curae; Curabitur quis luctus lectus.</p>
                            <a href="single.html" className="btn-banner"> View Post </a>
                        </div>
                        <div className="col-lg-7 blog-img2">
                            <img src="images/blog2.jpg" alt="" className="img-fluid" />
                            <a href="single.html">Blog #4</a>
                        </div>
                    </div>
                </div >
            </section >
            /* <!-- //blog --> */
        );
    }
}

export default Layout;
