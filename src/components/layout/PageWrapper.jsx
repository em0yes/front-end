// import React from 'react';
// import styled from 'styled-components';
// import Footer from './Footer'; // Footer만 import
// import { useLocation } from "react-router-dom";
// const Wrapper = styled.div`
//   /* align-items: center;
//   justify-content: center;
//   transform-origin: center; /* 축소/확대 기준점을 중앙으로 설정 */

//   background-color: #fff;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   justify-content: center;
//   width: 1920px; /* 고정 너비 */
//   min-height: 100vh; /*고정 높이 */
//   flex: 1;

// `;

// // const Wrapper = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   width: 100vw; /* 뷰포트 너비로 설정 */
// //   min-height: 100vh; /* 뷰포트 높이로 설정 */
// //   background-color: #ffffff; /* 배경색 */
// //   align-items: center;
// //   justify-content: center;
// // `;

// // const Content = styled.div`
// //   flex: 1;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   background-color: #fff;
// //   width: 1920px; /* 기준 너비 */
// //   height: 980px; /* 기준 높이 */
// //    transform: scale(1); /* 기본 배율 */
// //   transform-origin: center; /* 중앙 기준으로 확대/축소 */
// //    margin: 0 auto; /*중앙 정렬*/ 
  
    
// // `;

// const PageWrapper = ({ children }) => {
//   const location = useLocation(); // 현재 경로 가져오기

//   return (
//     <Wrapper>
//       <Content>{children}</Content>
//       {location.pathname !== "/" && <Footer />} {/* Footer는 로그인 페이지에서 제외 */}
//     </Wrapper>
//   );
// };

// export default PageWrapper;


// src/components/layout/PageWrapper.jsx


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
  position: relative; /* 자식 요소 기준점 설정 */
  width: 100%;
  width: 1920px; /* 최대 너비 설정 */
  height: 980px;
  transform: scale(1); /* 기본 배율 */
  transform-origin:center; /* 중앙 기준으로 확대/축소 */

  margin: 0 auto; /*중앙 정렬*/ 

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