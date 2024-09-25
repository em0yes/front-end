import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { setupWebSocket } from './websocket';

function App() {
  const [locations, setLocations] = useState({}); // 각 scanner_id별 위치 데이터를 저장
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 }); // 이미지 사이즈 상태
  const imageRef = useRef(null);

  // 이미지 크기 업데이트 함수
  const updateImageSize = () => {
    if (imageRef.current) {
      setImageSize({
        width: imageRef.current.clientWidth,
        height: imageRef.current.clientHeight,
      });
    }
  };

  useEffect(() => {
    // 이미지 로딩 시 크기 설정
    updateImageSize();
    window.addEventListener('resize', updateImageSize); // 창 크기 변경 시 이미지 크기 업데이트

    return () => {
      window.removeEventListener('resize', updateImageSize);
    };
  }, []);

  // 웹소켓 설정
  useEffect(() => {
    const cleanupWebSocket = setupWebSocket((message) => {
      const data = JSON.parse(message); // 서버에서 수신한 메시지를 JSON으로 변환
      console.log('웹소켓으로 받은 데이터:', data); // 수신된 데이터 확인을 위한 로그

      // scanner_id에 따라 위치 데이터를 업데이트
      setLocations((prevLocations) => ({
        ...prevLocations,
        [data.scanner_id]: data, // 해당 scanner_id의 위치 정보 업데이트
      }));
    });

    return () => {
      cleanupWebSocket(); // 컴포넌트 언마운트 시 WebSocket 연결 종료
    };
  }, []);

  const ICON_SIZE = 50;  // 아이콘의 너비와 높이를 50px로 설정
  const HALF_ICON_SIZE = ICON_SIZE / 2;  // 아이콘 크기의 절반

  // 구역의 x 좌표를 계산하는 함수
  const getLeftPosition = (zone, imageWidth) => {
    const zoneCoords = {
      A_1: [775, 1040], A_2: [558, 775], A_3: [361, 559], B_1: [264, 362], B_2: [4, 265],
      C_1: [180, 294], C_2: [181, 293], C_3: [180, 293], D_1: [262, 365], D_2: [3, 263],
      E_1: [775, 909], E_2: [574, 775], E_3: [365, 575]
    };

    const coords = zoneCoords[zone];
    if (!coords) return 0;

    // (오른쪽 좌표 - 왼쪽 좌표) / 2 => 중간 위치, 아이콘의 왼쪽 위치를 맞추기 위해 25px을 뺌
    return (coords[1] - coords[0]) / 2 + coords[0] - HALF_ICON_SIZE;
  };

  // 구역의 y 좌표를 계산하는 함수
  const getTopPosition = (zone, imageHeight) => {
    const zoneCoords = {
      A_1: [685, 829], A_2: [712, 825], A_3: [712, 825], B_1: [712, 876], B_2: [711, 826],
      C_1: [537, 721], C_2: [362, 537], C_3: [196, 362], D_1: [43, 201], D_2: [90, 198],
      E_1: [47, 226], E_2: [91, 202], E_3: [92, 201]
    };

  const coords = zoneCoords[zone];
  if (!coords) return 0;

  // (아래쪽 좌표 - 위쪽 좌표) / 2 => 중간 위치, 아이콘의 위쪽 위치를 맞추기 위해 25px을 뺌
  return (coords[1] - coords[0]) / 2 + coords[0] - HALF_ICON_SIZE;
};


  // 작업자의 위치를 맵 이미지 위에 표시하는 함수
  const renderWorkerPositions = () => {
    return Object.values(locations).map((locationData) => {
      const { scanner_id, zone } = locationData; // zone이 있다고 가정
      return (

          <div
            key={scanner_id}
            className="location-icon"
            style={{
              position: 'absolute',
              left: `${getLeftPosition(zone, imageSize.width)}px`, // 존 좌표에 따른 x 좌표
              top: `${getTopPosition(zone, imageSize.height)}px`,  // 존 좌표에 따른 y 좌표
              width: '50px',
              height: '50px',

              backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/iconlocation.gif'})`,
              backgroundSize: 'cover',
            }}

            >
            {/* 작업자 ID를 아이콘 위에 표시 */}
            <span
              style={{
                position: 'absolute',
                top: '-20px', // 아이콘 위에 텍스트를 표시하기 위해 위로 이동
                left: '50%',
                padding: '0px 3px 0px 3px',
                transform: 'translateX(-50%)',
                color: 'black', // 텍스트 색상
                backgroundColor: '#30e875', // 배경
                fontWeight: 'bold', // 텍스트 강조
                borderRadius: '15px',
                whiteSpace: 'nowrap', //줄내림 방지
                fontSize: '12px'
              }}
            >
                Worker {scanner_id} 
            </span>
          </div>
      );
    });
  };

  return (

    <div className="App" style={{ position: 'relative' }}>
      <div className='Wrap' style={{width: '100vw'}}>
        <div className='Logo' style={{width:'80px',height:'40px', }}>logo</div>
        <div className="Map">
          <img
            ref={imageRef}
            src={process.env.PUBLIC_URL + '/assets/map.png'}
            useMap="#imgmap"
            alt="Map"
          />
          {renderWorkerPositions()} {/* 여러 작업자 위치 표시 */}

          {/* 이미지 맵 영역 */}
          <map id="imgmap" name="imgmap">
            <area shape="rect" alt="A_1" coords="775,685,1040,829" href="" />
            <area shape="rect" alt="A_2" coords="558,712,775,825" href="" />
            <area shape="rect" alt="A_3" coords="361,712,559,825" href="" />
            <area shape="rect" alt="B_1" coords="264,712,362,876" href="" />
            <area shape="rect" alt="B_2" coords="4,711,265,826" href="" />
            <area shape="rect" alt="C_1" coords="180,537,294,721" href="" />
            <area shape="rect" alt="C_2" coords="181,362,293,537" href="" />
            <area shape="rect" alt="C_3" coords="180,196,293,362" href="" />
            <area shape="rect" alt="D_1" coords="262,43,365,201" href="" />
            <area shape="rect" alt="D_2" coords="3,90,263,198" href="" />
            <area shape="rect" alt="E_1" coords="775,47,909,226" href="" />
            <area shape="rect" alt="E_2" coords="574,91,775,202" href="" />
            <area shape="rect" alt="E_3" coords="365,92,575,201" href="" />
          </map>
        </div>




        {/* <div>
          {Object.values(locations).map((locationData) => (
            <p key={locationData.scanner_id}>
              작업자 {locationData.scanner_id} 위치: {locationData.zone}
            </p>
          ))}
        </div> */}
        
        
        
        
        <footer 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '100px',
            left: '0px',
            top: '1200px',
            background: '#F5F5F5',
            fontSize: '20px'
          }}>
            ⓒ 2024. Em0yes. All right reserved        
        </footer>
      </div>
    </div>
  );
}

export default App;
