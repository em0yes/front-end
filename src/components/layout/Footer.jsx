

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position:flex;
  bottom: 0;
  width: 100%; /* 부모 컨테이너 기준으로 너비 설정 */
  min-width:1920px;
  height: 100px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; 가운데 정렬 */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024. Em0yes. All rights reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
