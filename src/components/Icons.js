import React from 'react';
import PDF from '../elements/EmmaBarashResumé.png'
import { StyledIcons1, StyledIcons2, StyledIcons3, StyledIcons4, StyledIcons5, IconContainer, MyImage } from '../elements/index'

const Icons = () => {
    const emailAlert = () => {
        return alert('My Email is: emma.barash.dev@gmail.com :D')
    }
    const phoneAlert = () => {
        return alert('Call Me: (707)-590-1903')
    }
    return (
        <IconContainer>
           <a href="https://github.com/emma-barash"                    target="_blank"> <StyledIcons1 src="https://img.icons8.com/ios/50/000000/github.png"           alt="git icon"/></a>
           <a href="https://www.linkedin.com/in/emma-barash-861333181" target="_blank"> <StyledIcons2 src="https://img.icons8.com/ios/50/000000/linkedin-circled.png" alt="linkedIn icon"/></a>
           <a download="EmmaBarashResumé" href={PDF}><StyledIcons3 src="https://img.icons8.com/dotty/80/000000/resume.png"         alt="resumé icon"/></a>
            <a><StyledIcons4 src="https://img.icons8.com/ios/50/000000/email.png"            alt="email icon" onClick={() => emailAlert()}/></a>
            <a><StyledIcons5 src="https://img.icons8.com/ios/50/000000/number-pad.png"            alt="phone icon" onClick={() => phoneAlert()}/></a>
        </IconContainer>
    );
};

export default Icons;