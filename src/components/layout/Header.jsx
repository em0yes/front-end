import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom"; // Link 컴포넌트 추가

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 120px;
  background-color: #ffffff;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 좌우 간격 유지 */
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  flex: 1; /* 너비를 유연하게 설정 */
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 제목과 사용자 정보 간격 유지 */
  margin: 20px 10px 0px 20px;
  border-bottom: 3px solid #E9E9E9;

`;

const Title = styled.h1`
  font-size: 28px;
  color: #8F8F8F;
  margin: 0; /* 여백 제거 */
  white-space: nowrap; /* 제목이 줄바꿈되지 않도록 설정 */
  overflow: hidden; /* 내용이 너무 길 경우 숨김 처리*/ 
  text-overflow: ellipsis; /*내용이 넘칠 경우 생략 표시*/
`;

const Logo = styled.img`
  height: 100px;
`;
const UserIconWrapper = styled.div`
  float:right;
  display: flex;
  margin:0px 10px 0px 10px;
  align-items: center; //세로 중앙 정렬
  /* justify-content: flex-end; 오른쪽 정렬 */
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
  margin: 0 10px; /* 상하 여백 제거 및 좌우 여백 추가 */
  color: #7E7E7E;
`;

const Header = ({ title, username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("username"); // 로컬스토리지에서 username 제거
    navigate("/"); // 로그인 페이지로 이동
};
  return (
    <HeaderWrapper>
      <Logo src="/assets/Icon/Header/Header_logo.svg" alt="Logo" />
      <TitleWrapper>
        <Title>{title}</Title>
        <UserIconWrapper>
          <UserImg src="/assets/Icon/Header/Header_userimg.svg" alt="User Icon" />
          <Username>{username}</Username>
          <DownIcon onClick={handleLogout} src="/assets/Icon/Header/Header_downIcon.svg" alt="Down Icon" />
        </UserIconWrapper>
      </TitleWrapper>
    </HeaderWrapper>
  );
};

export default Header;