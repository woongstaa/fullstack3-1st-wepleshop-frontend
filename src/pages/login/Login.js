import React from 'react';
import { useState } from 'react';
import './Login.scss';
import LoginSignIn from './LoginSignIn';
import LoginSignUp from './LoginSignUp';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const onClickSignIn = () => {
    setIsLogin(true);
  };

  const onClickSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div id="loginContainer">
      <div className="title">
        <h3>WEPLE SHOP</h3>
      </div>
      <div className="selectorWrapper">
        <div>
          <button id="btnSignIn" className="btn" onClick={onClickSignIn}>
            로그인
          </button>
        </div>
        <div>
          <button id="btnSignUp" className="btn" onClick={onClickSignUp}>
            회원가입
          </button>
        </div>
      </div>
      {isLogin ? <LoginSignIn /> : <LoginSignUp />}
    </div>
  );
}

export default Login;
