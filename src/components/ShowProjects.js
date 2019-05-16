import React from 'react';
import { ExperienceContainer, StyledDate, StyledProjectTitle } from '../elements/index'

const ShowProjects = () => {
    return (
        <div>
            <ExperienceContainer>
            <StyledProjectTitle className='projects'>Projects</StyledProjectTitle><br/>
            <StyledProjectTitle><a href="http://emmabarash-zencss.surge.sh/" target="_blank">CSS ZEN GARDEN</a></StyledProjectTitle> <span>{'<'}= link</span>
            <StyledDate>HTML, CSS, Static Website.</StyledDate> 
            <p>This project showcases design-replication of an official "CSS Zen Garden" website.
             The objective is to demonstrate a proficient understanding of CSS implementation with the 
             intention of closely replicating ajother's artistic vision.
            </p>
            </ExperienceContainer>
            <ExperienceContainer> 
            <StyledProjectTitle><a href="https://bountyhunter-emmabarash.herokuapp.com/" target="_blank">Bounty Hunter</a></StyledProjectTitle>
            <StyledDate>React, Node.js, JSX, CSS, MongoDB:<br/> Dynamic Full Stack Website</StyledDate>
            <p>"Bounty Hunter" is built with React and utilizes RESTful api requests to a Mongo Database to populate
                the user interface.  
            </p>
        </ExperienceContainer>
    </div>
    );
};

export default ShowProjects;