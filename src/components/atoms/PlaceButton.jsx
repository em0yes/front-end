import { Link } from "react-router-dom";
import React from "react";
import styled, { css } from "styled-components";

const PlaceContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 30px;
    display: inline-block;
    border: 1px solid #000000;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 30px;
    overflow: hidden;
    text-align: center;
`;

const SelectPlaceButton = styled.img`
    ${(props) =>
        props.placeName === '7호관'
            ? css`
                width: 300px; /* 7호관은 부모 크기 꽉 채움 */
                height: 300px;
                object-fit: cover;
            `
            : css`
                width: auto; /* 도서관은 이미지 원래 크기 유지 */
                height: auto;
                max-width: 80%; /* 부모 크기에 맞춰 최대 너비 제한 */
                max-height: 80%; /* 부모 크기에 맞춰 최대 높이 제한 */
                margin: auto;
                position: relative;
                top: 50%;
                transform: translateY(-50%); /* 수직 중앙 정렬 */
            `}
            margin-right:5px;
`;

const PlacenameWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    font-weight: bolder;
    color: #000;
    text-align: center;
`;

function PlaceButton({ placeName, placeImg }) {
    const place = placeImg === "/assets/Icon/Location/Place_7.svg" ? "/RealTimeLocationMonitoring" : "/Preparing";

    return (
        <Link to={place}>
            <PlaceContainer>
                <SelectPlaceButton src={placeImg} alt={placeImg.alt} placeName={placeName} />
                <PlacenameWrapper>
                    {placeName}
                </PlacenameWrapper>
            </PlaceContainer>
        </Link>
    );
}

export default PlaceButton;
