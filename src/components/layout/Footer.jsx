

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position:flex;
  bottom: 0;
  width: 100%; /* 뷰포트 너비를 기준으로 설정 */
  min-width: 1920px; /* 최대 너비를 컨텐츠와 일치 */
  height: 100px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;



const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024. Em0yes. All rights reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
