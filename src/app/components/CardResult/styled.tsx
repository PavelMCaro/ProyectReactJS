import styled, { css } from "styled-components";

interface Button{
    disabled: boolean;
}

export const Title=styled.p`
    font-family: gotham-book;
    width: auto;
    font-weight: bold;
`;

export const Total= styled.p`
    width: 230px;
    font-weight: bold;
    margin-left: 40px;
    font-size: 18px;
`;

export const Button = styled.button`
    color: #fff; background-color: #1976D2;
    border: 1px solid black;
    cursor: pointer;
    height: 35px;
    width: 100px;
    font-family: gotham-book;
    display: flex;
    margin-left: 140px;
    align-items: center;
    ${(props: Button) => props.disabled && css`
        background-color: #cccccc;
        color: #666666;
        cursor: default;
    `}
`;


export const Line = styled.hr`
    height: 1px;
    background-color: #1976D2;
`;

export const ButtonText = styled.span`
    font-size: 15px;
`;

export const ImageButton = styled.img`
    width: 25px;
    height: 25px;
`;

export const Description = styled.div`
    width: 380px;
    min-height: 250px;
    padding: 10px;
`;

export const Wrapper = styled.div`
    width: 380px;
    height: 450px;
    box-sizing: border-box;
    font-family: gotham-book;
    border: 2px solid black;
    position: relative;
    top: 100px;
`;