import styled from 'styled-components';

export const  RevealProjects = styled.div`
    position: absolute;
    top: 25%;
    left: 3%;
    overflow-y: scroll;
    @media(max-width: 900px){
        top: 100%;
    }
    @media(max-width: 545px){
        top: 115%;
        text-align: center;
    }
`;