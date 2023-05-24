const { styled } = require("styled-components");


export const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    background: ${props => props.secondary ? '#483BEE' : '#c3c3c3'};
    color: ${props =>  props.secondary ? props.theme.white : props.theme.black};
    border:0;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight:500;

    transition: 0.8s;
    svg {
        height: 24px;
        width: 24px;
    }
    &:hover {
        filter: brightness(0.9);
    }
`