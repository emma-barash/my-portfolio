import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    width: 40%;
    margin-left: 20%;
    overflow-y: scroll;
    padding-right: 25px;
    border-right: 1px solid #100c08;
    @media(max-width: 946){
        margin-left: 10%;
        margin-top: 10px;
        /* position: absolute; */
        bottom: 0px;
        width: 80%;
        font-size: 20px;
    }
    @media (max-width: 900px){
        border: none;
        width: 90vw;
        margin-left: 2px;
    }
    @media(max-width: 545px){
        margin: auto auto auto 20px;
    }
`;
