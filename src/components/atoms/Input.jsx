import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 400px;
    height: 80px;
    max-width: 400px; /* 입력 필드 최대 너비 설정 */
    padding:10px;
    margin: 10px 0;
    font-size: 16px;
    border-radius:10px;
    box-sizing: border-box;
    border:none;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size:15px;
        color: #c7c7c7; /* placeholder 색상 설정 */
  }
`;

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;