import React from 'react';
import Toggle from '../shared/Toggle';
import { Button, RevealProjects } from '../elements/index';
import Experience from './Experience';
import ShowProjects from './ShowProjects'

const Projects = () => {
    return (
        <RevealProjects>
            <p>onClick = {'{'}toggle{'}'};</p>
            <Toggle render={({on, toggler}) =>
             on ?
             <>
                <Button onClick={toggler}>Experience</Button>
                <ShowProjects />
            </>
            :
            <>
            <Button onClick={toggler}>Projects</Button>
            <Experience />
            </>
            }/>
        </RevealProjects>
    );
};

export default Projects;