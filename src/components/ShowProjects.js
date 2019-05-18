import React from 'react';
import { ExperienceContainer, StyledDate, StyledProjectTitle, StyledProjectsTitle } from '../elements/index'

const ShowProjects = () => {
    return (
    <div>
        <ExperienceContainer>
            <StyledProjectsTitle>Projects</StyledProjectsTitle><br/>
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
            <ExperienceContainer> 
            <StyledProjectTitle><a href="http://emmabarash-mariogame-vanillajs.surge.sh/" target="_blank">Mario Pest Control</a></StyledProjectTitle>
            <StyledDate>HTML, JavaScript, CSS:<br/>Static Website</StyledDate>
            <p>"Mario Pest Control" was created with three coding languages, which are commonly used for building static websites.  Input the number of monsters for Mario 
                to exterminate and the total cost will be returned.  Mario doesn't come cheap, but his services are the BEST!  
            </p>
        </ExperienceContainer>
    </div>
    );
};

export default ShowProjects;