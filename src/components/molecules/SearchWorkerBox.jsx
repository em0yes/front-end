import React, { useState } from "react";
import styled from "styled-components";

const SearchWorkerWrapper = styled.div`
    width: 80%;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(188, 188, 188, 0.6);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    overflow-y: auto;
`;

const SearchInputWrapper = styled.div`
    width: 90%;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-left: 80px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 16px;
    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.img`
    border: none;
    padding: 10px;
    background: none;
    cursor: pointer;
    font-size: 16px;
`;

const InfoTable = styled.div`
    margin-top: 20px;
    text-align: left;
    width: 90%;
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-top: 1px solid #ddd;
`;

const Label = styled.span`
    font-weight: bold;
`;

const Value = styled.span`
    text-align: right;
`;

const SearchWorkerBox = ({ onSearch, workerData, errorMessage }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // 검색 버튼 클릭 시 호출되는 함수
    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <SearchWorkerWrapper>
            <h1 style={{ textAlign: "center" }}>작업자 위치 검색</h1>
            <SearchInputWrapper>
                <SearchInput
                    type="text"
                    placeholder="작업자를 입력해주세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchButton
                    src="/assets/Icon/Main/search.svg"
                    onClick={handleSearch} // 검색 버튼 클릭 시 호출
                />
            </SearchInputWrapper>

            {/* 오류 메시지 표시 */}
            {errorMessage && (
                <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>
                    {errorMessage}
                </div>
            )}

            {/* 검색 결과 표시 */}
            {workerData && (
                <InfoTable>
                    <InfoRow>
                        <Label>작업자:</Label>
                        <Value>{workerData.worker}</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Scanner ID:</Label>
                        <Value>{workerData.scanner_id}</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>현재 위치:</Label>
                        <Value>{workerData.zone}</Value>
                    </InfoRow>
                </InfoTable>
            )}
        </SearchWorkerWrapper>
    );
};

export default SearchWorkerBox;
