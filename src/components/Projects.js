import React from 'react';
import Toggle from '../shared/Toggle';
import { Button, RevealProjects, MyImage } from '../elements/index';
import Experience from './Experience';
import ShowProjects from './ShowProjects'

const Projects = () => {
    return (
        <div>
            {/* <MyImage src="https://lh3.googleusercontent.com/a-/AAuE7mBiASjFRtVCSemMqltMwIo99FtmKZE9VJ-ReTiv=s192" alt='linkedIn'/> */}
                <RevealProjects>
                    <p>onClick = {'{'}toggle{'}'};</p>
                    <Toggle render={({on, toggler}) =>
                    on ?
                    <>
                    <Button onClick={toggler}>Experience</Button>
                    <ShowProjects on={on}/>
                    </>
                    :
                    <>
                    <Button onClick={toggler}>Projects</Button>
                    <Experience />
                    </>
                    }/>
            </RevealProjects>
        </div>
    );
};

export default Projects;