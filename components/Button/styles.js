const { styled } = require("styled-components");


export const ButtonStyle = styled.button`
    background: ${props => props.secondary ? 'blue' : 'red'};
    
    border:0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    /* font-family: 'Poppins', sans-serif; */
    font-weight:500;
`