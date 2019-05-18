import styled from 'styled-components';

export const Button = styled.button`
    background-color: transparent;
    /* background-image: linear-gradient(transparent, #105c08); */
    border: 3px solid #100c08 ;
    color: #100c08;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px 30px;
    font-family: Nova;
    &:focus{
        outline: none;
    }
`;
