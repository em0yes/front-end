import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height:140px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 0 auto; /* 가로 중앙 정렬 */
  padding: 0; /* 상하단 여백 제거 */
`;

const Logo = styled.img`
margin-left:20px;
  height: 100px;
`;

const TitleWrapper = styled.div`
  width: 1750px;
  margin-left:20px;
  border-bottom: 3px solid #E9E9E9;
  
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #8F8F8F;
  padding-top: 50px;
  display:block;
`;


const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const DownIcon = styled.img`
  height: 30px;
`;

const Username = styled.p`
  font-size: 30px;
  font-weight: bolder;
  padding: 10px;
  color: #7E7E7E;
`;

const Header = ({ title, username }) => {
  return (
    <HeaderWrapper>
      <Logo src="/assets/Icon/Header/Header_logo.svg" alt="Logo" />
      <TitleWrapper>
        <Title>{title}</Title>
        <UserIconWrapper>
        <UserImg src="/assets/Icon/Header/Header_userimg.svg" alt="User Icon" />
        <Username>{username}</Username>
        <DownIcon src="/assets/Icon/Header/Header_downIcon.svg" alt="Down Icon" />
      </UserIconWrapper>
      </TitleWrapper>
    </HeaderWrapper>
  );
};

export default Header;
