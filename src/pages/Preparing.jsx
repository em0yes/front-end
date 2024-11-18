import React from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/molecules/Navbar';
import styled from 'styled-components';


const MainWrapper = styled.div`
    display: flex; /* Flexbox로 자식 요소를 가로로 정렬 */
    width: 1920px; /* 전체 레이아웃 너비 */    
    margin-top: 15px;
    margin-bottom:15px;

    height: 870px; /* 최대 높이 */
    margin: 0 auto; /* 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    position: relative; /* Overlay 위치 조정을 위해 relative 사용 */
`;

const BlurredMapImageWrapper = styled.div`
    flex: 1; /* 나머지 공간을 지도에 할당 */
    margin-right:30px;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    position: relative; /* Overlay를 위한 relative */
`;

const BlurredMapImage = styled.img`
    width: 1083px;
    height: 840px;
    filter: ${(props) => (props.blur ? "blur(30px)" : "none")}; /* blur 여부에 따라 필터 적용 */
`;

const SoonOverlay = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px; /* Soon 이미지의 너비 */
    height: auto;
    z-index: 1;
`;

function Preparing() {
    return (
        <>
            <Header 
                title="실시간 위치 모니터링" 
                username="admin"
            />
            <MainWrapper>
                {/* 네브바 */}                    
                <Navbar 
                        middleIcon="/assets/Icon/Navbar/Navbar_searchIcon.svg"
                />
           

                {/* 지도 및 Soon 오버레이 */}
                <BlurredMapImageWrapper>
                    <BlurredMapImage
                        src="assets/Map/Map_for_blur.png"
                        alt="Map_for_blur"
                        blur // 블러 처리
                    />
                    <SoonOverlay src="/assets/Map/Soon.gif" alt="Soon" />
                </BlurredMapImageWrapper>
            </MainWrapper>
        </>
    );
}

export default Preparing;
