import React, { useState } from "react";
import styled from "styled-components";

const SearchWorkerWrapper = styled.div`
  width: 80%;
  min-height: 400px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(188, 188, 188, 0.6);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 요소 간 간격 분배 */
  padding: 30px;
  /* overflow-y: auto; */
`;

const SearchInputWrapper = styled.div`
  width: 80%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 70px;
`;

const InfoTable = styled.div`
  margin-top: auto; /* 위 요소들과 최대한 떨어지도록 설정 */
  width: 90%;
  text-align: center;
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
  width:30px;
  height:30px;
  border: none;
  padding: 10px;
  background: none;
  cursor: pointer;
  font-size: 16px;
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
          onClick={handleSearch}
        />
      </SearchInputWrapper>
      {errorMessage && (
        <div style={{ textAlign: "center", color: "red", marginTop: "10px" }}>
          {errorMessage}
        </div>
      )}      

      

      
      {workerData 
      && 
      (
        <>
          <h2 style={{ fontSize:"16px",marginTop:"30px",textAlign: "center" ,flexWrap: "wrap" }}>{workerData.worker} 님의 위치 검색 결과</h2>

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
          <InfoRow>
              <Label>층:</Label>
              <Value>{workerData.floor}</Value>
          </InfoRow>

          </InfoTable>
        </>
      )}
    </SearchWorkerWrapper>
  );
};

export default SearchWorkerBox;