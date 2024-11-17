import React from "react";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PlaceButton from "../components/atoms/PlaceButton";

const SearchPlaceWrapper = styled.div`
    width:100%;
    min-height:840px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap: wrap; /* 줄바꿈 허용 */
`;
const BeaconScannerButton = styled.img`
    z-index: 1;
    position: fixed;
    width: 80px;
    height: 120px;

    /* 뷰포트 기준 상대적인 위치 */
    left: calc(1920px - 100px); /* 화면 오른쪽에서 약간 떨어지도록 조정 */
    top: 10vh; /* 화면 위쪽에서 10% 내려오게 설정 */

    /* 중앙 정렬 보정 */
    transform: translateX(-50%);
`;

function Home(){
    return (
        <>
            <Header 
                title="장소 선택"
                username="admin"
            />
            <Link to="/WorkerMapping"><BeaconScannerButton src="/assets/Icon/Main/BeaconScannerIcon.svg"></BeaconScannerButton></Link>

            <SearchPlaceWrapper>
                <PlaceButton placeName="7호관" placeImg = "/assets/Icon/Location/Place_7.svg" />
                <PlaceButton placeName="도서관" placeImg = "/assets/Icon/Location/LibraryLocationPin.svg"/>
            </SearchPlaceWrapper>
        </>

    );
}

export default Home;