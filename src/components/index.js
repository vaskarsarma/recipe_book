import React, { Component } from 'react';
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import Banner from "./banner";
import Layout from "./Layout";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderTop /> 
                <Header />
                <Banner />
                <Layout />
                <Footer /> 
            </div>
        );
    }
}

export default Home;