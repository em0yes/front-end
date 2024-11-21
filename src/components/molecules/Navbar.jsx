import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  /* width: 160px;
  height: 840px; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center; /* 상하 간격 균등하게 배치 */

`;

const NavbarSection = styled.div`
  width: 100px;
  height: 300px;
  border-radius: 50px;
  background: radial-gradient(circle at 30% 30%, rgba(10, 14, 45, 0.95), rgba(15, 20, 50, 0.8), rgba(20, 25, 60, 0.5)); /* 중심은 약간 밝고 외곽은 차분한 그라디언트 */
  box-shadow: 
    inset 4px 4px 10px rgba(255, 255, 255, 0.1), /* 부드러운 내부 반사 효과 */
    inset -4px -4px 10px rgba(15, 20, 50, 0.2), /* 어두운 내부 그림자 */
    4px 4px 8px rgba(0, 0, 0, 0.3), /* 부드러운 외부 그림자 */
    6px 6px 12px rgba(0, 0, 0, 0.15); /* 약한 외부 그림자 */
  background-color: #0E1672;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;

  display: ${(props) => (props.src ? 'block' : 'none')}; /* 이미지가 없으면 숨기기 */
`;

const Navbar = ({ middleIcon }) => {
  const linkPath = middleIcon === "/assets/Icon/Navbar/Navbar_searchIcon.svg"? "/SearchWorker" : "/RealtimeLocationMonitoring";

  return (
    <NavbarWrapper>
      <NavbarSection>
        {/* 고정 아이콘 */}
        <Link to="/Home"><Icon src="/assets/Icon/Navbar/Navbar_homeIcon.svg" alt="Home" /></Link>
        
        {/* 동적 가운데 아이콘 */}
        <Link to={linkPath}><Icon src={middleIcon} alt={middleIcon.alt}/></Link>

        {/* 고정 아이콘 */}
        <Link to="/RealtimeLocationMonitoring"><Icon src="/assets/Icon/Navbar/Navbar_alertIcon.svg" alt="Alert" /></Link>
      </NavbarSection>
    </NavbarWrapper>
  );
};

export default Navbar;
