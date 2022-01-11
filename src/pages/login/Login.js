import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.scss';
import LoginSignIn from './LoginSignIn';
import LoginSignUp from './LoginSignUp';

function Login() {
  const location = useLocation();
  const isLoginSignUp = location.state.isLoginSignUp;

  const isLoginSelector = () => {
    if (isLoginSignUp === undefined) {
      return true;
    } else if (isLoginSignUp === false) {
      return false;
    }
  };

  const [isLogin, setIsLogin] = useState(isLoginSelector);

  const onClickSignIn = event => {
    setIsLogin(true);
  };

  const onClickSignUp = event => {
    setIsLogin(false);
  };

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div id="loginContainer">
      <div className="title">
        <h3 className="logo" onClick={goToHome}>
          WEPLE SHOP
        </h3>
      </div>
      <div className="selectorWrapper">
        <div>
          <button
            id="btnSignIn"
            className={`btn ${isLogin === true && 'active'}`}
            onClick={onClickSignIn}
          >
            로그인
          </button>
        </div>
        <div>
          <button
            id="btnSignUp"
            className={`btn ${isLogin === false && 'active'}`}
            onClick={onClickSignUp}
          >
            회원가입
          </button>
        </div>
      </div>
      {isLogin ? (
        <LoginSignIn />
      ) : (
        <LoginSignUp onClickSignIn={onClickSignIn} />
      )}
    </div>
  );
}

export default Login;
