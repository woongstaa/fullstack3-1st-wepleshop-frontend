import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { POST_SIGNIN_API } from '../../config';
import ModalLogin from '../../components/modalLogin/ModalLogin';

function LoginSignIn() {
  const [validation, setValidation] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [token, setToken] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // 리팩토링 구현중
  // const [inputs, setInputs] = useState({
  //   email: '',
  //   password: '',
  // });

  // const { email, password } = inputs;
  // End

  // 아이디/비밀번호 입력 받아오는 코드(리팩토링 필요 : 중복 코드)
  const handleIdInput = event => {
    setEmailInput(event.target.value);
  };
  const handlePwInput = event => {
    setPasswordInput(event.target.value);
  };
  // End

  useEffect(() => {
    const emailValidation = emailInput.includes('@');
    const passwordValidation = passwordInput.length >= 5;

    if (emailValidation && passwordValidation) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [emailInput, passwordInput]);

  useEffect(() => {
    if (validation === true) {
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

  // sessionStorage에 토큰 저장. 토큰이 사이트 내에서 실제로 어떻게 사용되는지 공부 필요
  // sessionStorage.setItem('ID', token);

  const navigate = useNavigate();
  const goToHome = () => {
    sessionStorage.setItem('ID', token);
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
          {/* onClick 이벤트 내용을 세분화하기(if문 사용?),
          0. 홈으로 가는 함수
          1. 이메일 양식 오류 모달창
          2. 비밀번호 길이 오류 모달창*/}
          로그인
        </button>
        {modalOpen && <ModalLogin modalClose={modalClose} />}
      </div>
      <div className="forgotPassword">
        <span id="emailPassword">아이디 / 비밀번호 찾기</span>
      </div>
    </div>
  );
}
// End

export default LoginSignIn;
