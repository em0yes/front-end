import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PlaceButton from "../components/atoms/PlaceButton";

const PageContainer = styled.div`
    width: 100%; /* 부모 컨테이너는 항상 화면 전체를 차지 */
    width: 1920px;
    position: relative; /* 자식 요소 기준점 설정 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 자식 요소 중앙 정렬 */
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

    /* 1920px 너비를 기준으로 오른쪽 끝에서 약간 떨어지게 */
    right: max(calc((100% - 1920px) / 2 + 140px), 140px); /* 120px을 최소값으로 설정 */
    top: 160px; /* 고정된 높이 */
`;

function Home() {
    const [username, setUsername] = useState("Guest");
    
    useEffect(() => {
        const storedUsername = localStorage.getItem("username"); // 로컬스토리지에서 "username" 키로 값 가져오기
        if (storedUsername) {
            setUsername(storedUsername); // 값이 존재하면 상태 업데이트
        }
    }, []);


    return (
        <>

            <PageContainer>
            <Header
                title="장소 선택"
                username={username} // 로컬스토리지에서 가져온 사용자 이름 전달
            />
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
