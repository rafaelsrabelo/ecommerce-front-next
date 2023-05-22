import Link from "next/link";
import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    background-color: ${props => props.theme.app};
    padding: 20px 40px;
    `

export const Logo = styled(Link)`
    color: #ffffff;
    margin-right:auto;
    font-weight: 700;
    `

export const NavLink = styled(Link)`
    color:#aaa;
    padding: 10px 0;

    &+& {
        margin-left: 15px;
    }

    &:hover {
        color: ${props => props.theme.white};
    }
`;