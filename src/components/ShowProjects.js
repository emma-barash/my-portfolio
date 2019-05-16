import React from 'react';
import { ExperienceContainer, StyledSkillTitle, StyledDate } from '../elements/index'

const ShowProjects = () => {
    return (
        <div>
            <ExperienceContainer>
            <StyledSkillTitle><a href="http://emmabarash-zencss.surge.sh/" target="_blank">CSS ZEN GARDEN</a></StyledSkillTitle> <span>{'<'}= link</span>
            <StyledDate>HTML, CSS, Static Website.</StyledDate> 
            <p>This project showcases design-replication of an official "CSS Zen Garden" website.
             The objective is to demonstrate a proficient understanding of CSS implementation with the 
             intention of closely replicating another's artistic vision.
            </p>
            </ExperienceContainer>
            <ExperienceContainer> 
            <StyledSkillTitle><a href="https://bountyhunter-emmabarash.herokuapp.com/" target="_blank">Bounty Hunter</a></StyledSkillTitle>
            <StyledDate>React, Node.js, JSX, CSS, MongoDB:<br/> Dynamic Full Stack Website</StyledDate>
            <p>"Bounty Hunter" is built with React and utilizes RESTful api requests to a Mongo Data Base to populate
                the user interface.  
            </p>
        </ExperienceContainer>
    </div>
    );
};

export default ShowProjects;