import React from 'react';
import { StyledName, StyledTitles, DetailedContainer, StyledSkillTitle, StyledSkills, StyledSkillBracket, StyledSkillTitle1, StyledSkillBracket2 } from '../elements/index'

const Header = () => {
    return (
        <div>
            <DetailedContainer>
                <StyledName style={{borderBottom: '1px solid #100c08'}}>EMMA BARASH</StyledName>
                <StyledTitles>Web Developer</StyledTitles>
                <StyledSkillTitle>Skills = {'{'}</StyledSkillTitle>
                <StyledSkillTitle1>Front End:{'{'}</StyledSkillTitle1>
                <StyledSkills> <br/>JavaScript,<br/>HTML,<br/>CSS, <br/>ES5/6,<br/>React,</StyledSkills>
                <StyledSkillBracket2>{'}'},</StyledSkillBracket2>
                <StyledSkillTitle1>Back End:{'{'}</StyledSkillTitle1>
                <StyledSkills><br/>Express,<br/>MongoDB,<br/>Node.js </StyledSkills>
                <StyledSkillBracket2>{'}'},</StyledSkillBracket2>
                <StyledSkillBracket>{'}'};</StyledSkillBracket>
            </DetailedContainer>
        </div>
    );
};

export default Header;