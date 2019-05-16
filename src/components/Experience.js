import React from 'react';
import { ExperienceContainer, StyledTitles, StyledExperienceDesc, StyledDate } from '../elements/index';

const Experience = () => {
    const styles = {
        span: {
            left: '12%',
            top: '38%',
        }
    }
    return (
        <div>
        <ExperienceContainer>
            <StyledTitles>Experience</StyledTitles>
            <span style={styles.span}>link ={'>'}</span> <StyledExperienceDesc>Product Manager Intern:<br/> <a href="https://bstreetshoes.com/" target="_blank">B Street Shoes</a></StyledExperienceDesc> 
            <StyledDate>June - December, 2017</StyledDate>
            <p> • Task Delegation to a Team of Five Artists  <br></br>
            • Regularly Updated Website Content<br></br>
            • Customer Service: spoke with over 150 customers daily<br></br>
            • Web-Search Optimization Updates & Implementation<br></br>
            • Outreach to other companies for promotional collaborations. - Setting up events at TOMs; successfully initiated a contract with Jimmy Choo.<br></br>
            • Handled Last-Minute Product Changes: discussed changes with customers while making sure the product is delivered on schedule.<br></br></p>
            {/* <h3>Horseback Riding Instructor:</h3> <span>Teaching people all ages and levels of experience in riding horses.</span><br></br>
            <h3>Hebrew Teacher:</h3> <span>helped kids learn to read Hebrew in preparation for the bar/bat mitzvahs.</span><br></br>
            <h3>Languages:</h3> <span>English, Mandarin (Traditional)</span></p> 
            <button className="experience" onClick={toggler}>Experience</button> */}
        </ExperienceContainer>
        </div>
    );
};

export default Experience;