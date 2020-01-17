import React, { Component, Fragment } from 'react';
import Header from './Header';
import About from './About';
import Services from './services';
import Carausal from './carausal';
import Teams from './Teams';
import Footer from './footer';




class Home extends Component {
    render() {
        return (
           <Fragment>
                <Header />
                <Carausal />
                <Services />
                <About />
                <Teams />
                <Footer />
                </Fragment>
        );
    }
}

export default Home;