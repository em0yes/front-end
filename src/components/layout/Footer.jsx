// // import React from 'react';
// // import styled from 'styled-components';

// // const FooterWrapper = styled.footer`
// //   position: fixed;
// //   bottom: 0;
// //   left: 50%; /* 화면의 중앙에 위치하도록 설정 */
// //   transform: translateX(-50%); /* 중앙 정렬 */
// //   width: ${() => (window.innerWidth > '1920px' ? '1920px' : '100vw')}; /* 조건부로 너비 설정 */
// //   height: 100px;
// //   background-color: #333;
// //   color: white;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   z-index: 10;


// // `;

// // const Footer = () => {
// //   return (
// //     <FooterWrapper>
// //       <p>© 2024. Em0yes. All rights reserved</p>
// //     </FooterWrapper>
// //   );
// // };

// // export default Footer;

// import React from 'react';
// import styled from 'styled-components';

// const FooterWrapper = styled.footer`


//   width: 100%;

//   height:100px;
//   position:sticky;
//   bottom:0;
//   background-color: #333;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Footer = () => {
//   return (
//     <FooterWrapper>
//       <p>© 2024. Em0yes. All rights reserved</p>
//     </FooterWrapper>
//   );
// };

// export default Footer;


import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position:sticky;
  bottom: 0;
  width: 100vw;
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
