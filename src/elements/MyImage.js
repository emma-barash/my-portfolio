import styled from 'styled-components';

export const MyImage = styled.img`
    position: absolute;
    float: left;
    width: 150px;
    top: 0px;
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    height: 150px;
    border-radius: 100%;
    border: 3px solid #100c08;
    box-shadow: 3px 6px 8px #100c08;
    /* @media(max-width: 1439px){
        bottom: 550px;
    } */
    @media(max-width: 980px){
        top: 0;
        right: 55%;
    }
    @media(max-width: 545px){
        right: 40%;
        position: absolute;
        height: 100px;
        width: 100px;
        top: 0;
    }
`;