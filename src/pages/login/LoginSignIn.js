import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../../components/LoginModal';
function LoginSignIn() {
  const [validation, setValidation] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [token, setToken] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleIdInput = event => {
    setEmailInput(event.target.value);
  };
  const handlePwInput = event => {
    setPasswordInput(event.target.value);
  };

  useEffect(() => {
    const emailValidation = emailInput.includes('@');
    const passwordValidation = passwordInput.length > 6;

    if (emailValidation && passwordValidation) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [emailInput, passwordInput]);

  // DB에서 해당 사용자에 대한 token 받아오는 코드(리팩토링 필요)
  useEffect(() => {
    fetch('http://localhost:8000/users/signin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    })
      .then(res => res.json())
      .then(data => setToken(data.token));
  });
  // DB에서 해당 사용자에 대한 token 받아오는 코드(리팩토링 필요) - End

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const isToken = validation && token !== undefined;

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  // 로그인/회원가입 버튼 클릭시 해당 화면 렌더링하는 코드(리팩토링 필요 : 중복 UI)
  return (
    <div id="loginSignInContainer">
      <div className="inputWrapper">
        <p className="inputTitle">이메일</p>
        <input type="email" placeholder="이메일" onChange={handleIdInput} />
      </div>
      <div className="inputWrapper">
        <p className="inputTitle">비밀번호 (6자리 이상)</p>
        <input
          type="password"
          placeholder="비밀번호 (6자리 이상)"
          onChange={handlePwInput}
        />
      </div>
      <div className="submit">
        <button
          className="btn"
          type="submit"
          onClick={isToken ? goToHome : modalClose}
        >
          로그인
        </button>
        {modalOpen && <LoginModal modalClose={modalClose} />}
      </div>
      <div className="forgotPassword">
        <span id="emailPassword">아이디 / 비밀번호 찾기</span>
      </div>
    </div>
  );
}
// 로그인/회원가입 버튼 클릭시 해당 화면 렌더링하는 코드(리팩토링 필요 : 중복 UI) - End

export default LoginSignIn;
