import React from "react";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PlaceButton from "../components/atoms/PlaceButton";

const PageContainer = styled.div`
    width: 100%; /* 부모 컨테이너는 항상 화면 전체를 차지 */
    max-width: 1920px; /* 최대 너비 고정 */
    margin: 0 auto; /* 중앙 정렬 */
    position: relative; /* 자식 요소 기준점 설정 */
`;

const SearchPlaceWrapper = styled.div`
    width: 100%;
    min-height: 840px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative; /* 상대적인 기준점 설정 */
    flex-wrap: wrap; /* 줄바꿈 허용 */
`;

const BeaconScannerButton = styled.img`
    z-index: 1;
    position: absolute; /* 부모 컨테이너(PageContainer)를 기준으로 위치 고정 */
    width: 80px;
    height: 120px;

    /* 오른쪽 끝에서 약간 떨어지게 (1920px 범위 초과 방지) */
    right: max(calc((100% - 1920px) / 2 + 60px), 60px); /* 60px을 최소값으로 설정 */
    top: 16px; /* 고정된 높이 */
`;

function Home() {
    return (
        <>
            <Header 
                title="장소 선택"
                username="admin"
            />
            <PageContainer>
                <Link to="/WorkerMapping">
                    <BeaconScannerButton src="/assets/Icon/Main/BeaconScannerIcon.svg" />
                </Link>

                <SearchPlaceWrapper>
                    <PlaceButton placeName="7호관" placeImg="/assets/Icon/Location/Place_7.svg" />
                    <PlaceButton placeName="도서관" placeImg="/assets/Icon/Location/LibraryLocationPin.svg" />
                </SearchPlaceWrapper>
            </PageContainer>
        </>
    );
}

export default Home;
