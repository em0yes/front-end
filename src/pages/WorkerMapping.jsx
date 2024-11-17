import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClickButton from "../components/atoms/ClickButton";
import Header from "../components/layout/Header";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
`;

const WorkerMappingWrapper = styled.div`
    width: 100%;
    min-height: 840px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const InputWorkerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const ScannerBox = styled.div`
    width: 200px;
    height: 330px;
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
    display: ${(props) => (props.editable ? "block" : "none")}; /* 수정 모드에서만 보임 */
`;

const WorkerName = styled.h4`
    margin: 0;
    font-size:20px;
    display: ${(props) => (props.editable ? "none" : "block")}; /* 수정 모드에서는 숨김 */
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
`;

const ActionButton = styled.button`
    width: 160px;
    height: 60px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: #fff;
    background: #1B263B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    &:hover {
        opacity: 0.8;
    }
`;

function WorkerMapping() {
    const [workerData, setWorkerData] = useState([
        { scanner_id: 1, worker: "" },
        { scanner_id: 2, worker: "" },
        { scanner_id: 3, worker: "" },
        { scanner_id: 4, worker: "" },
        { scanner_id: 5, worker: "" },
    ]);
    const [isEditing, setIsEditing] = useState(false);

    // 초기 데이터 로드
    useEffect(() => {
        const fetchWorkerData = async () => {
            try {
                const response = await axios.get("/api/worker/setworker");
                setWorkerData(response.data); // 서버에서 받은 데이터 배열 형식으로 저장
            } catch (error) {
                console.error("Error fetching worker data:", error);
                alert("작업자 데이터를 가져오는 중 오류가 발생했습니다.");
            }
        };

        fetchWorkerData();
    }, []);

    const handleInputChange = (scannerId, value) => {
        setWorkerData((prevData) =>
            prevData.map((item) =>
                item.scanner_id === scannerId ? { ...item, worker: value } : item
            )
        );
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            await axios.patch("/api/worker/saveworker", workerData); // workerData 배열을 서버에 보냄
            alert("작업자 정보가 성공적으로 저장되었습니다.");
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving worker data:", error);
            alert("작업자 정보를 저장하는 중 오류가 발생했습니다.");
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <>
            <Header title="스캐너 별 작업자 매핑" username="admin" />

            <PageContainer>
                <WorkerMappingWrapper>
                    <InputWorkerWrapper>
                        {workerData.map((item) => (
                            <ScannerBox key={item.scanner_id}>
                                <h3>BLE Scanner {item.scanner_id}</h3>
                                <ScannerImage
                                    src="/assets/Icon/Main/BeaconScanner.svg"
                                    alt={`Scanner ${item.scanner_id}`}
                                />
                                <WorkerName editable={isEditing}>
                                    Worker Name : {item.worker || "N/A"}
                                </WorkerName>
                                <InputField
                                    type="text"
                                    placeholder="작업자를 입력해주세요"
                                    value={item.worker || ""}
                                    onChange={(e) => handleInputChange(item.scanner_id, e.target.value)}
                                    editable={isEditing}
                                />
                            </ScannerBox>
                        ))}
                    </InputWorkerWrapper>
                    <ButtonWrapper>
                        {!isEditing ? (
                            <ClickButton onClick={handleEdit} text="수정하기" />
                        ) : (
                            <>
                                <ActionButton onClick={handleSave}>저장</ActionButton>
                                <ActionButton onClick={handleCancel}>취소</ActionButton>
                            </>
                        )}
                    </ButtonWrapper>
                </WorkerMappingWrapper>
            </PageContainer>
        </>
    );
}

export default WorkerMapping;
