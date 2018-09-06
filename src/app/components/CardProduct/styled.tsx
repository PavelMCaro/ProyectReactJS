import styled, { css } from "styled-components";

interface Button {
    disabled: boolean;
}
export const Product = styled.p`
    width: 150px;
`;

export const Price= styled.p`
    width: 80px;
`;

export const Count = styled.p`
    text-aling: center;
    width: 15px;
`;

export const Button = styled.button`
    color: #fff; background-color: #D32F2F;
    border: 1px solid black;
    cursor: pointer;
    height: 30px;
    width: 30px;
    align-content: center;
    margin-left: 20px;
    margin-top: 7px;
    padding: 0;
`;

export const PlusButton = styled.button`
    color: #fff; background-color: #1976D2;
    border: 1px solid black;
    cursor: pointer;
    height: 20px;
    width: 20px;
    align-content: center;
    margin-left: 20px;
    margin-top: 13px;
    padding: 0;
    ${(props: Button) => props.disabled && css`
        cursor: default;
    `}
`;

export const MinusButton = styled.button`
    color: #fff; background-color: #1976D2;
    border: 1px solid black;
    cursor: pointer;
    height: 20px;
    width: 20px;
    align-content: center;
    margin-left: 20px;
    margin-top: 13px;
    padding: 0;
`;

export const ImagePlus = styled.img`

`;

export const ImageMinus = styled.img`

`;

export const ImageButton = styled.img`
    width: 20px;
    height: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 360px;
`;