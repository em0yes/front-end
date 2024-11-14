import React from "react";
import styled from "styled-components";

const BeaconInfoWrapper = styled.div`
    width: 90%;
    height: 350px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(188, 188, 188, 0.6);
    border-radius: 30px;
    padding: 20px;
    overflow-y: auto; /* 스크롤 추가 */
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
`;

const TableHeader = styled.th`
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
`;

const TableRow = styled.tr`
    &:nth-child(odd) {
        background: #f9f9f9;
    }
`;

const TableData = styled.td`
    padding: 10px 0;
    font-size: 14px;
`;

const BeaconList = () => {
    //  비콘 데이터
    const beaconsScanner = [
        { number: "Beaconscanner1", isOn: "" },
        { number: "Beacon 2", isOn: "A_2" },
        { number: "Beacon 3", isOn: "A_3" },
        { number: "Beacon 4", isOn: "A_4" },
        { number: "Beacon 5", isOn: "A_5" },
        // 추가 비콘 데이터
    ];

    return (
        <BeaconInfoWrapper>
            <h2 style={{ textAlign: "center", marginBottom: "15px" }}>비콘 스캐너 On/Off</h2>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Number</TableHeader>
                        <TableHeader>On/Off</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {beacons.slice(0, 5).map((beacon, index) => (
                        <TableRow key={index}>
                            <TableData>{beacon.number}</TableData>
                            <TableData>{beacon.zone}</TableData>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </BeaconInfoWrapper>
    );
};

export default BeaconList;