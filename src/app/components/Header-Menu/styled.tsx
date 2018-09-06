import styled, { css } from "styled-components";

interface PropsAvatar{
    showAvatar: boolean;
}

interface PropsButton{
    showButton: boolean;
}

export const Wrapper=styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px 0 10px;
`;

export const User=styled.p`
    font-size: 17px;
    color: #888;
    width: 60px; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    display: block;
    margin-right: 60px;
    &:hover{
        overflow: visible;
    }
`;

export const Avatar=styled.img`
    height: 45px;
    width: 45px;
    margin-right: 25px;
    display: none
    ${(props: PropsAvatar) => props.showAvatar && css`
        display: block !important;
    `}
`;

export const Button = styled.button`
    background: #8cb420;    
    color: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
    border: none;
    height: 35px;
    width: 100px;
    font-family: gotham-book;
    font-size: 16px;
    display: block;
    ${(props: PropsButton) => !props.showButton && css`
        display: none !important;
    `}
`