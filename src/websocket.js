import { io } from 'socket.io-client';

export function setupWebSocket(onMessage) {
    const socket = io('http://localhost:8081', {
        transports: ['websocket'], // 폴링을 사용하지 않고 WebSocket만 사용
    });

    socket.on('newData', (data) => {
        console.log('서버로부터 수신된 데이터:', data);
        if (onMessage) {
            onMessage(data);
        }
    });

    socket.on('disconnect', () => {
        console.log('WebSocket 연결 종료');
    });

    socket.on('connect_error', (error) => {
        console.error('WebSocket 연결 오류:', error);
    });

    return () => {
        socket.disconnect();
    };
}
