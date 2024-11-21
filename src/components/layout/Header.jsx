import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 120px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px 0px 0px;
  padding-bottom: 10px;
  border-bottom: 3px solid #E9E9E9;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #8F8F8F;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Logo = styled.img`
  height: 100px;
  margin-right:20px;
`;

const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const UserImg = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const DownIcon = styled.img`
  height: 30px;
  cursor: pointer;
`;

const Username = styled.p`
  font-size: 30px;
  font-weight: bolder;
  margin: 0 10px;
  color: #7E7E7E;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin:5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 10;
`;

const LogoutButton = styled.button`
  background: none;
  color: white;
  border: 1px solid white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: white;
    color: black;
  }
`;

const Header = ({ title }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '로그인해주세요');
  const [isLoggedOut, setIsLoggedOut] = useState(!localStorage.getItem('username'));
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev); // Dropdown 표시/숨김 상태 토글
  };

  const handleLogout = () => {
    if (!isLoggedOut) {
      localStorage.removeItem('username');
      setUsername('로그인');
      setIsLoggedOut(true);
      setIsDropdownVisible(false); // Dropdown 닫기
      navigate("/");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedOut(false);
    }
  }, []);

  return (
    <HeaderWrapper>
      <Logo src="/assets/Icon/Header/Header_logo.svg" alt="Logo" />
      <TitleWrapper>
        <Title>{title}</Title>
        <UserIconWrapper>
          <UserImg src="/assets/Icon/Header/Header_userimg.svg" alt="User Icon" />
          <Username>{username}</Username>
          <DownIcon
            onClick={handleToggleDropdown}
            src={
              isDropdownVisible
                ? "/assets/Icon/Header/Header_UpIcon.svg"
                : "/assets/Icon/Header/Header_downIcon.svg"
            }
            alt="Toggle Dropdown"
          />
          <Dropdown isVisible={isDropdownVisible}>
            <LogoutButton onClick={handleLogout}>
              {isLoggedOut ? 'Login' : 'Logout'}
            </LogoutButton>
          </Dropdown>
        </UserIconWrapper>
      </TitleWrapper>
    </HeaderWrapper>
  );
};

export default Header;
