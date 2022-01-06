import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { POST_SIGNUP_API } from '../../config';
import ModalLogin from '../../components/modalLogin/ModalLogin';
import ModalPersonal from '../../components/modalLogin/ModalPersonal';
import ModalTerms from '../../components/modalLogin/ModalTerms';
// import ModalSignUp from '../../components/ModalSignUp';

function LoginSignUp({ onClickSignIn }) {
  const [validation, setValidation] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTermsOpen, setModalTermsOpen] = useState(false);
  const [modalPersonalOpen, setModalPersonalOpen] = useState(false);
  // const [modalSignUpOpen, setModalSignUpOpen] = useState(false);

  // 이름/아이디/비밀번호 입력 받아오는 코드(리팩토링 필요 : 중복 코드)
  const handleIdInput = event => {
    setEmailInput(event.target.value);
  };
  const handlePwInput = event => {
    setPasswordInput(event.target.value);
  };
  const handleNameInput = event => {
    setNameInput(event.target.value);
  };
  // End

  useEffect(() => {
    const emailValidation = emailInput.includes('@');
    const passwordValidation = passwordInput.length > 5;
    const nameValidation = nameInput;

    if (emailValidation && passwordValidation && nameValidation) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [nameInput, emailInput, passwordInput]);

  // const navigate = useNavigate();
  const goToHome = () => {
    fetch(POST_SIGNUP_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      }),
    });

    onClickSignIn();
    // navigate('/');
  };

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const modalTermsClose = () => {
    setModalTermsOpen(!modalTermsOpen);
  };

  const modalPersonalClose = () => {
    setModalPersonalOpen(!modalPersonalOpen);
  };

  // const modalSignUpClose = () => {
  //   setModalSignUpOpen(!modalSignUpOpen);
  // };

  return (
    <div id="loginSignUpContainer">
      <div className="inputWrapper">
        <p className="inputTitle">이름</p>
        <input type="text" placeholder="이름" onChange={handleNameInput} />
      </div>
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
      <div className="agreeEmail">
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">이용약관 동의</span>
          <span className="agreeContents" onClick={modalTermsClose}>
            보기
          </span>
          {modalTermsOpen && <ModalTerms modalTermsClose={modalTermsClose} />}
        </label>
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">개인정보수집·이용 동의</span>
          <span className="agreeContents" onClick={modalPersonalClose}>
            보기
          </span>
          {modalPersonalOpen && (
            <ModalPersonal modalPersonalClose={modalPersonalClose} />
          )}
        </label>
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">만 14세 이상입니다.</span>
        </label>
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">이메일 소식 받기 (선택)</span>
        </label>
      </div>
      <div className="submit">
        {/* 회원가입 완료시 새로운 모달창(회원가입 축하) 구현하고, 다시 로그인 화면으로 가던가 혹은 token 받아서 메인페이지로 바로 갈수 있도록 구현해야함 */}
        <button
          className="btn"
          type="submit"
          onClick={validation ? goToHome : modalClose}
        >
          회원가입
        </button>
        {/* {modalSignUpOpen && <ModalSignUp modalSignUpClose={modalSignUpClose} />} */}
        {modalOpen && <ModalLogin modalClose={modalClose} />}
      </div>
    </div>
  );
}

export default LoginSignUp;
