import React from 'react';
import Header from './components/Header';
import { LandingBackground } from './elements/index';
import Icons from './components/Icons'
import './elements/App.css';
import Projects from './components/Projects'

const App = () => {
    return (
        <LandingBackground>
            <Header />
            <Icons />
            <Projects />
        </LandingBackground>
    );
};

export default App;