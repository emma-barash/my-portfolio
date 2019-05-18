import React from 'react';
import Header from './components/Header';
import { LandingBackground } from './elements/index';
import Icons from './components/Icons'
import './elements/App.css';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
    return (
        <LandingBackground>
            <Header />
            <Icons />
            <Projects />
            <Footer />
        </LandingBackground>
    );
};

export default App;