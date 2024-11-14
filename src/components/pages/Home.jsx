import React from "react";
import Header from "../layout/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PlaceButton from "../atoms/PlaceButton";

const SearchPlaceWrapper = styled.div`
    width:100%;
    min-height:840px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap: wrap; /* 줄바꿈 허용 */
`;
const BeaconScannerButton = styled.img`
    z-index:1;
    position: absolute;
    width: 80px;
    height: 120px;
    left: 1850px;
    top: 180px;
`

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