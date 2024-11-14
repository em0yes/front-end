import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    width: 400px;
    justify-content:center;
    align-items:center; 
    display: flex;

`;
const Button = styled.button`
    height: 70px;
    width:100%;
    border-radius: 30px;
    cursor: pointer;
    border:none;
    color:white;
    background-color: #1B263B;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center; /* 텍스트를 정 가운데로 정렬 */

`

function ClickButton({text, onClick}) {
    return(
        <ButtonWrapper>
            <Button onClick={onClick}>{text}</Button>
        </ButtonWrapper>
    );
}

export default ClickButton;