import styled, { css } from "styled-components";


interface Button {
    disabled: boolean;
}

export const Title = styled.h2`
    text-align: center;
`;

export const Image= styled.img`
    width: 150px;
    height: 150px;
    margin-left: 70px;
`;

export const Description = styled.p`    
    width: auto;
    min-height: 120px;
    font-family: gotham-book;    
    text-align: justify;
`;

export const Price = styled.p`
    font-family: gotham-book;
    width: auto;
    font-weight: bold;
    text-align: center;
`;

export const Stock = styled.p`
    font-family: gotham-book;
    width: auto;
    text-align: left;
`;

export const Button = styled.button`
    color: #fff; background-color: #1976D2;
    border: 1px solid black;
    cursor: pointer;
    height: 35px;
    width: 150px;
    margin-left: 70px;
    font-family: gotham-book;
    display: flex;
    align-items: center;
    ${(props: Button) => props.disabled && css`
        background-color: #cccccc;
        color: #666666;
        cursor: default;
    `}
`;

export const ButtonText = styled.span`
    font-size: 15px;
`;

export const ImageButton = styled.img`
    width: 25px;
    height: 25px;
`;

export const Wrapper = styled.div`
    width: 300px;
    height: 550px;
    box-sizing: border-box;
    font-family: gotham-book;
    border: 2px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
`;