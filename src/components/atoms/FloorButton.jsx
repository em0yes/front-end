import React from "react";
import styled , { css }from "styled-components";

const FloorNumberButton = styled.button`
    width: 60px;
    height: 60px;
    font-size: 25px;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(54, 54, 54, 0.4);
    border-radius: 15px;
    border: 2px solid transparent;
    color: #000;
    
    /* 활성화된 상태일 때의 스타일 */
    ${(props) =>
        props.isActive &&
        css`
            color: red;
            border-color: red;
        `}
`;

function FloorButton({ floor, isActive, onClick }) {
    return (
        <FloorNumberButton onClick={onClick} isActive={isActive}>
            {floor}
        </FloorNumberButton>
    );
}

export default FloorButton;