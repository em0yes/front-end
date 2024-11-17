import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/molecules/Navbar';
import SearchWorkerBox from '../components/molecules/SearchWorkerBox';
import { setupWebSocket } from '../websocket';
import axios from 'axios';
import styled from 'styled-components';

const Map = styled.div`
    display: flex;
    width: 1920px;
    height: 870px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
`;

function SearchWorker() {
    const [locations, setLocations] = useState({});
    const [searchedWorkerLocation, setSearchedWorkerLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    // 특정 작업자를 검색하는 함수
    const handleSearchWorker = async (workerName) => {
        try {
            setErrorMessage(""); // 오류 메시지 초기화
            const response = await axios.get(`http://localhost:8080/api/worker/search`, {
                params: { worker: workerName }
            });
            console.log("작업자 실시간 위치: ", response.data.scanner);
            setSearchedWorkerLocation(response.data.scanner);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setErrorMessage("해당 작업자의 최근 위치 정보가 없습니다.");
            } else {
                console.error('작업자 데이터 검색 중 오류:', error);
                setErrorMessage("작업자 데이터를 검색하는 중에 오류가 발생했습니다.");
            }
            setSearchedWorkerLocation(null);
        }
    };

    // 웹소켓 설정
    useEffect(() => {
        const cleanupWebSocket = setupWebSocket((message) => {
            try {
                const data = JSON.parse(message);
                if (!data.scanner_id || !data.zone) {
                    throw new Error('Invalid data format');
                }

                // scanner_id에 따라 위치 데이터를 업데이트
                setLocations((prevLocations) => ({
                    ...prevLocations,
                    [data.scanner_id]: data, // 해당 scanner_id의 위치 정보 업데이트
                }));
            } catch (error) {
                console.error('WebSocket message error:', error);
            }
        });

        return () => {
            cleanupWebSocket();
        };
    }, []);

    // 특정 구역을 하이라이트하는 함수
    const highlightZone = (zoneId) => {
        const zoneElement = document.getElementById(zoneId);
        if (zoneElement) {
            zoneElement.style.stroke = '#FAFABE'; // 테두리 색상 변경
            zoneElement.style.strokeWidth = '2'; // 테두리 두께 변경
        }
    };

    // 모든 구역 초기화 함수
    const resetZones = () => {
        const zones = document.querySelectorAll('path'); // 모든 path 요소 선택
        zones.forEach((zoneElement) => {
            zoneElement.style.stroke = ''; // 테두리 색상 초기화
            zoneElement.style.strokeWidth = ''; // 테두리 두께 초기화
            zoneElement.style.fill = '#D9D9D9'; // 기본 색상으로 초기화
        });
    };

    // 작업자 위치에 따른 구역 강조
    useEffect(() => {
        resetZones(); // 모든 구역 초기화

        // 검색된 작업자의 위치 강조
        if (searchedWorkerLocation && searchedWorkerLocation.zone) {
            highlightZone(searchedWorkerLocation.zone);
        }

        // 실시간 위치 업데이트 강조
        Object.values(locations).forEach((locationData) => {
            const { zone } = locationData;
            if (zone) {
                highlightZone(zone); // 해당 구역 하이라이트
            }
        });
    }, [locations, searchedWorkerLocation]);

    return (
        <>
            <Header
                title="작업자 위치 검색"
                username="admin"
            />

            <Map>
                <Navbar
                    middleIcon="/assets/Icon/Navbar/Navbar_realtimeLocationMapIcon.svg"
                />
                
                {/* 검색 결과와 오류 메시지를 SearchWorkerBox에 전달 */}
                <SearchWorkerBox 
                    onSearch={handleSearchWorker} 
                    workerData={searchedWorkerLocation} 
                    errorMessage={errorMessage}
                />
            </Map>
        </>
    );
}

export default SearchWorker;
