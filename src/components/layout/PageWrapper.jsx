// src/components/layout/PageWrapper.jsx
import React from 'react';
import styled from 'styled-components';
import Footer from './Footer'; // Footer만 import
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh;
  background-color: #fff;
  align-items: center;

`;

const Content = styled.div`
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  display: flex;
  flex-direction: column; /* 세로 정렬을 위해 추가 */
  align-items: center;
  background-color: #fff;
  width: 100%;
  max-width: 1920px; /* 최대 너비 설정 */
  min-height: 980px;
`;

const PageWrapper = ({ children }) => {
  const location = useLocation(); // 현재 경로 가져오기

  return (
    <Wrapper>
      <Content>{children}</Content>
      {location.pathname !== "/" && <Footer />}
    </Wrapper>
  );
};

export default PageWrapper;
