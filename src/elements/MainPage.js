import styled from 'styled-components';

export const LandingBackground = styled.div`
    height: 140vh;
    width: 100vw;
    /* overflow-y: scroll; */
    @media(max-width: 946px){
        height: 180vh;
    }
    @media(max-width: 900px){
        height: 200vh;
    }
    @media(max-width: 545px){
        height: 255vh;
    }
`;
