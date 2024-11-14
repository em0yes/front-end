import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* 가운데 정렬 */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024. Em0yes. All rights reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
