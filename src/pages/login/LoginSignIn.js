import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalLogin from '../../components/ModalLogin';

function LoginSignIn() {
  const [validation, setValidation] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [token, setToken] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // 리팩토링
  // const [inputs, setInputs] = useState({
  //   email: '',
  //   password: '',
  // });

  // const { email, password } = inputs;
  // 리팩토링 - End

  // const onKeyPress = event => {
  //   if (event.key === 'Enter') {
  //     goToHome();
  //   }
  // };

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
    const passwordValidation = passwordInput.length > 6;

    if (emailValidation && passwordValidation) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [emailInput, passwordInput]);

  // DB에서 해당 사용자에 대한 token 받아오는 코드(리팩토링 필요 : 현재 아이디/비밀번호 타이핑시 계속 서버 통신 --> 로그인 버튼 클릭시 한번만 통신하도록 개선 필요)
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
  // End

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
        <input
          type="email"
          placeholder="이메일"
          onChange={handleIdInput}
          // onKeyPress={isToken ? onKeyPress : modalClose}
        />
      </div>
      <div className="inputWrapper">
        <p className="inputTitle">비밀번호 (6자리 이상)</p>
        <input
          type="password"
          placeholder="비밀번호 (6자리 이상)"
          onChange={handlePwInput}
          // onKeyPress={isToken ? onKeyPress : modalClose}
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
