import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import ClickButton from "../components/atoms/ClickButton";
import Input from "../components/atoms/Input";
import { Link, useNavigate } from "react-router-dom"; // Link 컴포넌트 추가
import client from "../lib/client";

const LoginText = styled.h1`
    font-size: 30px;
    line-height: 50px;
    margin :30px 100px 0px 0px;
    
    color: #585858;
`;

const PageContainer = styled.div`
    width: 100%; /* 부모 컨테이너는 항상 화면 전체를 차지 */
    width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center; /* 자식 요소 중앙 정렬 */
`;

const LoginWrapper = styled.div`
    width: 600px;
    height: 750px; 
    flex-direction: column;
    background: rgba(245, 245, 245, 0.8);
    box-shadow: 0px 0px 20px rgba(107, 107, 107, 0.4);
    position:relative;
    margin-top:80px;
    border-radius: 30px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Message = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.$isError ? "#FF0000" : "#5AA55D")};
`;

const UserImg = styled.img`
    width: 159px;
    height: 159px;
    position: absolute;
    top: -80px; /* 위쪽으로 겹치도록 조정 */
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const InputWrapper = styled.div`
    width:400px;
    margin-bottom:70px;
`

const TextWrapper = styled.div`
    width:100%;
    height:140px;
    display:flex;
    flex-direction:column;
    justify-content:start;

`

const TextName =styled.span`
    margin-left:10px;
    font-size:20px;
    font-weight:bolder;
    color:#ABABAB;

`
const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleLoginClick = async () => {
        console.log('로그인 버튼 실행됨');
        if (!username || !password) {
            setMessage("아이디 또는 비밀번호를 입력하지 않으셨습니다.");
            setIsError(true);
            return;
        }

        try {
            const response = await client.post("http://localhost:8080/api/admin/login", {
                username,
                password,
            });
            console.log(response);
            if (response.data.message === "SUCCESS") {
            //const token = response.data.token; // 서버에서 토큰을 받아옵니다.
            //localStorage.setItem("token", token); // 로컬 스토리지에 토큰을 저장합니다.
            setMessage("로그인 되었습니다.");
            setIsError(false);
            localStorage.setItem("username", username);

            navigate("/Home");
            } else {
            setMessage("아이디 또는 비밀번호가 잘못 입력되었습니다.");
            setIsError(true);
            }
        } catch (error) {
            console.error("로그인 오류", error);
            if (error.response && error.response.status === 404) {
            setMessage("존재하지 않는 ID입니다.");
            } else {
            setMessage("로그인 중 오류가 발생했습니다.");
            }
            setIsError(true);
        }
    };

    return(
        <PageContainer>
            <Header 
                title ="Login"
                username = "로그인해주세요"
            />

                <LoginWrapper>
                    <UserImg src="/assets/Icon/Login/Login_Userimg.svg"/>
                    <InputWrapper>
                        <TextWrapper>
                            <TextName>아이디</TextName>
                            <Input
                            type="text"
                            placeholder="아이디를 입력해주세요"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </TextWrapper>                
                        <TextWrapper>
                            <TextName>비밀번호</TextName>
                            <Input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </TextWrapper>                
                        {message && <Message $isError={isError}>{message}</Message>}
                    </InputWrapper> 
                    
                    <ClickButton text="로그인" onClick={handleLoginClick}/>


                </LoginWrapper>
        </PageContainer>
    );
} 

export default Login;