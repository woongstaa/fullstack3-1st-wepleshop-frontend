import React from 'react';
import { useState, useEffect } from 'react';
import './Login.scss';
import LoginSignIn from './LoginSignIn';
import LoginSignUp from './LoginSignUp';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [currentClick, setCurrentClick] = useState('');

  const onClickSignIn = event => {
    setIsLogin(true);
    setCurrentClick(event.target.id);
  };

  const onClickSignUp = event => {
    setIsLogin(false);
    setCurrentClick(event.target.id);
  };
  // 로그인/회원가입 버튼 CSS 변경하는 코드(리팩토링 필요 : boolean, useState 사용)
  useEffect(() => {
    if (currentClick) {
      let current = document.getElementById(currentClick);
      current.style.fontWeight = '600';
      current.style.borderBottom = '1px solid #111';
    }
    if (currentClick === 'btnSignIn') {
      let prev = document.getElementById('btnSignUp');
      prev.style.fontWeight = '400';
      prev.style.borderBottom = '1px solid #ddd';
    } else if (currentClick === 'btnSignUp') {
      let prev = document.getElementById('btnSignIn');
      prev.style.fontWeight = '400';
      prev.style.borderBottom = '1px solid #ddd';
    }
  }, [currentClick]);
  // End

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
