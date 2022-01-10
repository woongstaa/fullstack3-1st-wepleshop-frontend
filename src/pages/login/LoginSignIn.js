import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { POST_SIGNIN_API } from '../../config';
import ModalLogin from '../../components/modalLogin/ModalLogin';
import ModalEmail from '../../components/modalLogin/ModalEmail';

function LoginSignIn() {
  // 로그인/비밀번호 유효성 검증 state
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  // 사용자 key 입력 state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [token, setToken] = useState('');

  // modal 관련 state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEmailOpen, setModalEmailOpen] = useState(false);

  // 사용자가 입력한 이메일/비밀번호를 각각의 set 함수에 저장
  const handleIdInput = event => {
    setEmailInput(event.target.value);
  };
  const handlePwInput = event => {
    setPasswordInput(event.target.value);
  };

  // 이메일/비밀번호 유효성 검증 코드
  useEffect(() => {
    const emailValidation = emailInput.includes('@');
    const passwordValidation = passwordInput.length >= 5;
    if (emailValidation) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }

    if (passwordValidation) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }
  }, [emailInput, passwordInput]);

  // 유효성이 검증된 이메일/비밀번호를 백엔드로 보내서 token을 받아오는 코드
  useEffect(() => {
    if (emailValidation && passwordValidation) {
      fetch(POST_SIGNIN_API, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', mode: 'cors' },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      })
        .then(res => res.json())
        .then(data => setToken(data.token));
    }
  });

  // 로그인 버튼 클릭시 조건에 맞으면 sessionStorage에 token을 담고, 메인페이지로 이동
  const navigate = useNavigate();
  const goToHome = () => {
    sessionStorage.setItem('ID', token);
    navigate('/');
  };

  // 이메일/비밀번호 조건 및 유효한 token 발급이 된 상태인지를 검증
  const isToken = emailValidation && passwordValidation && token !== undefined;

  // 모달창 조건 코드
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  const modalEmailClose = () => {
    setModalEmailOpen(!modalEmailOpen);
  };

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
          onClick={() => {
            if (emailValidation === false && passwordValidation === true) {
              return modalEmailClose();
            } else if (!isToken) {
              return modalClose();
            } else if (isToken) {
              return goToHome();
            }
          }}
        >
          로그인
        </button>
        {modalOpen && <ModalLogin modalClose={modalClose} />}
        {modalEmailOpen && <ModalEmail modalEmailClose={modalEmailClose} />}
      </div>
      <div className="forgotPassword">
        <span id="emailPassword">아이디 / 비밀번호 찾기</span>
      </div>
    </div>
  );
}
// End

export default LoginSignIn;
