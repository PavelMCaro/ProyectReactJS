import styled, { css } from "styled-components";

interface ErrorMessage{
    show: boolean;
}

interface ErrorInput{
    showError: boolean;
}

interface ErrorLogin{
    showError: boolean;
}
export const Title = styled.h1`
    text-align: center;
    color: #8cb420;
`;

export const Input = styled.input`
    height: 40px;
    padding: 12px;
    width: 220px;
    font-size: 16px;
    margin-top: 10px;
    font-family: "Times New Roman", Times, serif;
    ${(props: ErrorInput) => props.showError && css`
        background-color: #f2dede!important;
        border: 1px solid #eed3d7!important;
    `}
`;

export const ErrorMessage = styled.div`
    display: none;
    color: #b94a4a;
    font-size: 12px;
    text-align: left;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: "Times New Roman", Times, serif;
    ${(props: ErrorMessage) => props.show && css`
        display: block!important;
    `}
`;

export const ErrorLogin = styled.div`
    margin-top: 40px;
    text-align: center;
    display: none;
    width: 100%;
    min-height: 35px;
    background-color: #f2dede;
    color: #b94a4a;
    padding-top: 5px;
    ${(props: ErrorLogin) => props.showError && css`
        display: block!important;
    `}
`;

export const Button = styled.button`
    color: #fff; background-color: #1976D2;
    border: 1px solid black;
    cursor: pointer;
    height: 35px;
    width: 220px;
    font-size: 16px;
    margin-top: 20px;
    font-family: "Times New Roman", Times, serif;
`;

export const Close = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    margin-left: 250px;
    margin-top: 20px;
`;

export const Form = styled.form`
    position: relative;
    background-color: #fefefe;
    height: 350px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;