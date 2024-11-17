import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import styled from "styled-components";
import axios from "axios";

const WorkerMappingWrapper= styled.div`
    width:1920px;
    height:840px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`

const InputWorkerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const ScannerBox = styled.div`
    width: 200px;
    height:330px;
    text-align: center;
    margin: 20px;
`;

const ScannerImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;

const InputField = styled.input`
    width: 90%;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
`;

const ActionButton = styled.button`
    width:160px;
    height: 60px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight:bolder;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color:#fff;
    background: #1B263B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    &:hover {
        opacity: 0.8;
    }
`;

function WorkerMapping() {
    const [workerValues, setWorkerValues] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
    });

    const handleInputChange = (scannerId, value) => {
        setWorkerValues((prevValues) => ({
            ...prevValues,
            [scannerId]: value
        }));
    };

    const handleSave = async () => {
        try {
            await axios.post("/api/worker/setworker", workerValues);
            alert("작업자 정보가 성공적으로 저장되었습니다.");
        } catch (error) {
            console.error("Error saving worker data:", error);
            alert("작업자 정보를 저장하는 중 오류가 발생했습니다.");
        }
    };

    const handleCancel = () => {
        setWorkerValues({
            1: "",
            2: "",
            3: "",
            4: "",
            5: ""
        });
    };

    return (
        <>
            <Header title="스캐너 별 작업자 매핑" username="admin" />
            <WorkerMappingWrapper>
                <InputWorkerWrapper>
                {[1, 2, 3, 4, 5].map((scannerId) => (
                    <ScannerBox key={scannerId}>
                        <h3>BLE Scanner {scannerId}</h3>
                        <ScannerImage src="/assets/Icon/Main/BeaconScanner.svg" alt={`Scanner ${scannerId}`} />
                        <h4 style={{margin:"0px 80px 10px 0px"}}>Worker Name : </h4>
                        <InputField
                            type="text"
                            placeholder="작업자를 입력해주세요"
                            value={workerValues[scannerId]}
                            onChange={(e) => handleInputChange(scannerId, e.target.value)}
                        />
                    </ScannerBox>
                ))}
                </InputWorkerWrapper>
                <ButtonWrapper>
                    <ActionButton onClick={handleSave}>저장</ActionButton>
                    <Link to="/Home"><ActionButton cancel onClick={handleCancel}>취소</ActionButton></Link>
                </ButtonWrapper>
            </WorkerMappingWrapper>


        </>
    );
}

export default WorkerMapping;