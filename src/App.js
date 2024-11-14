// // import React, { useState, useEffect, useRef } from 'react';
// // import './App.css';
// // import { setupWebSocket } from './websocket';

// // function App() {
// //   const [locations, setLocations] = useState({}); // 각 scanner_id별 위치 데이터를 저장
// //   const [imageSize, setImageSize] = useState({ width: 0, height: 0 }); // 이미지 사이즈 상태
// //   const imageRef = useRef(null);

// //   // 이미지 크기 업데이트 함수
// //   const updateImageSize = () => {
// //     if (imageRef.current) {
// //       setImageSize({
// //         width: imageRef.current.clientWidth,
// //         height: imageRef.current.clientHeight,
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     // 이미지 로딩 시 크기 설정
// //     updateImageSize();
// //     window.addEventListener('resize', updateImageSize); // 창 크기 변경 시 이미지 크기 업데이트

// //     return () => {
// //       window.removeEventListener('resize', updateImageSize);
// //     };
// //   }, []);

// //   // 웹소켓 설정
// //   useEffect(() => {
// //     const cleanupWebSocket = setupWebSocket((message) => {
// //       const data = JSON.parse(message); // 서버에서 수신한 메시지를 JSON으로 변환
// //       console.log('웹소켓으로 받은 데이터:', data); // 수신된 데이터 확인을 위한 로그

// //       // scanner_id에 따라 위치 데이터를 업데이트
// //       setLocations((prevLocations) => ({
// //         ...prevLocations,
// //         [data.scanner_id]: data, // 해당 scanner_id의 위치 정보 업데이트
// //       }));
// //     });

// //     return () => {
// //       cleanupWebSocket(); // 컴포넌트 언마운트 시 WebSocket 연결 종료
// //     };
// //   }, []);

// //   const ICON_SIZE = 50;  // 아이콘의 너비와 높이를 50px로 설정
// //   const HALF_ICON_SIZE = ICON_SIZE / 2;  // 아이콘 크기의 절반

// //   // 구역의 x 좌표를 계산하는 함수
// //   const getLeftPosition = (zone, imageWidth) => {
// //     const zoneCoords = {
// //       1: [1306, 1358], 2: [1254, 1306], 3: [1202, 1254], 4: [1148, 1202],
// //       5: [1094, 1149], 6: [1041, 1094], 7: [987, 1042], 8: [934, 986],
// //       9: [880, 934], 10: [827, 881], 11: [775, 828], 12: [721, 776],
// //       13: [669, 723], 14: [615, 669], 15: [562, 616], 16: [509, 563],
// //       17: [456, 511], 18: [403, 457], 19: [351, 403], 20: [297, 352],
// //       21: [243, 298], 22: [191, 243], 23: [137, 192], 24: [86, 139]
// //     };
  
// //     const coords = zoneCoords[zone];
// //     if (!coords) return 0;
  
// //     // 중간 좌표를 계산한 후, 아이콘의 반을 뺀 위치를 반환
// //     return (coords[1] - coords[0]) / 2 + coords[0] - HALF_ICON_SIZE;
// //   };
  
// // // 구역의 y 좌표를 계산하는 함수
// //   const getTopPosition = (zone, imageHeight) => {
// //     const yTop = 875;   // 상단 y 좌표
// //     const yBottom = 1000; // 하단 y 좌표
  
// //     // 중간 y 좌표에서 아이콘의 반을 뺀 위치를 반환
// //     return (yBottom - yTop) / 2 + yTop - HALF_ICON_SIZE;
// //   };

  
// //   const renderWorkerPositions = () => {
// //     return Object.values(locations).map((locationData) => {
// //       const { scanner_id, zone } = locationData; // zone이 있다고 가정
// //       return (

// //           <div
// //             key={scanner_id}
// //             className="location-icon"
// //             style={{
// //               position: 'absolute',
// //               left: `${getLeftPosition(zone, imageSize.width)}px`, // 존 좌표에 따른 x 좌표
// //               top: `${getTopPosition(zone, imageSize.height)}px`,  // 존 좌표에 따른 y 좌표
// //               width: '50px',
// //               height: '50px',
// //               fill: '#ccc',
// //               backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/iconlocation.gif'})`,
// //               backgroundSize: 'cover',
// //             }}

// //             >
// //             {/* 작업자 ID를 아이콘 위에 표시 */}
// //             <span
// //               style={{
// //                 position: 'absolute',
// //                 top: '-20px', // 아이콘 위에 텍스트를 표시하기 위해 위로 이동
// //                 left: '50%',
// //                 padding: '0px 3px 0px 3px',
// //                 transform: 'translateX(-50%)',
// //                 color: 'black', // 텍스트 색상
// //                 backgroundColor: '#30e875', // 배경
// //                 fontWeight: 'bold', // 텍스트 강조
// //                 borderRadius: '15px',
// //                 whiteSpace: 'nowrap', //줄내림 방지
// //                 fontSize: '12px'
// //               }}
// //             >
// //                 Worker {scanner_id} 
// //             </span>
// //           </div>
// //       );
// //     });
// //   };

// //   return (

// //     <div className="App" style={{ position: 'relative', width: '100vw', height: '100vh'}}>
// //       <div className='Wrap' style={{width: '100%', height: '100%'}}>
// //         {/* <div className='Logo' style={{}}>em0yes</div> */}
// //         <div className="Map">
// //           <img
// //             ref={imageRef}
// //             src={process.env.PUBLIC_URL + '/assets/map.svg'}
// //             useMap="#imgmap"
// //             alt="Map"
// //           />
// //           {renderWorkerPositions()} {/* 여러 작업자 위치 표시 */}


// //           <map id="imgmap" name="imgmap">
// //               <area shape="rect" alt="1" title="1" coords="1306,875,1358,1000" href="" target="" />
// //               <area shape="rect" alt="2" title="" coords="1254,875,1306,1000" href="" target="" />
// //               <area shape="rect" alt="3" title="" coords="1202,875,1254,1000" href="" target="" />
// //               <area shape="rect" alt="4" title="" coords="1148,875,1202,1000" href="" target="" />
// //               <area shape="rect" alt="5" title="" coords="1094,875,1149,1000" href="" target="" />
// //               <area shape="rect" alt="6" title="" coords="1041,875,1094,1000" href="" target="" />
// //               <area shape="rect" alt="7" title="" coords="987,875,1042,1000" href="" target="" />
// //               <area shape="rect" alt="8" title="" coords="934,875,986,1000" href="" target="" />
// //               <area shape="rect" alt="9" title="" coords="880,875,934,1000" href="" target="" />
// //               <area shape="rect" alt="10" title="" coords="827,875,881,1000" href="" target="" />
// //               <area shape="rect" alt="11" title="" coords="775,875,828,1000" href="" target="" />
// //               <area shape="rect" alt="12" title="" coords="721,875,776,1000" href="" target="" />
// //               <area shape="rect" alt="13" title="" coords="669,875,723,1000" href="" target="" />
// //               <area shape="rect" alt="14" title="" coords="615,875,669,1000" href="" target="" />
// //               <area shape="rect" alt="15" title="" coords="562,875,616,1000" href="" target="" />
// //               <area shape="rect" alt="16" title="" coords="509,875,563,1000" href="" target="" />
// //               <area shape="rect" alt="17" title="" coords="456,875,511,1000" href="" target="" />
// //               <area shape="rect" alt="18" title="" coords="403,875,457,1000" href="" target="" />
// //               <area shape="rect" alt="19" title="" coords="351,875,403,1000" href="" target="" />
// //               <area shape="rect" alt="20" title="" coords="297,875,352,1000" href="" target="" />
// //               <area shape="rect" alt="21" title="" coords="243,875,298,1000" href="" target="" />
// //               <area shape="rect" alt="22" title="" coords="191,875,243,1000" href="" target="" />
// //               <area shape="rect" alt="23" title="" coords="137,875,192,1000" href="" target="" />
// //               <area shape="rect" alt="24" title="" coords="86,875,139,1000" href="" target="" />
// //             </map>


// //         </div>


// //         <footer 
// //           style={{
// //             display: 'flex',
// //             flexDirection: 'row',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             position: 'absolute',
// //             width: '100%',
// //             height: '100px',
// //             left: '0px',
// //             top: '1200px',
// //             background: '#F5F5F5',
// //             fontSize: '20px'
// //           }}>
// //             ⓒ 2024. Em0yes. All right reserved        
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import RealTimeLocationMonitoring from './components/pages/RealTimeLocationMonitoring'
import Preparing from './components/pages/Preparing';
import LoginPage from './components/pages/Login';
import PageWrapper from './components/layout/PageWrapper'; 
import SearchWorker from './components/pages/SearchWorker';
import WorkerMapping from './components/pages/WorkerMapping'

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Preparing' element={<Preparing/>} />
          <Route path='/WorkerMapping' element={<WorkerMapping/>} />
          <Route path="/RealTimeLocationMonitoring" element={<RealTimeLocationMonitoring />} />
          <Route path="/SearchWorker" element={<SearchWorker />} />

        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;
