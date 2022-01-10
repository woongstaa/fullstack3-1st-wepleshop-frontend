import { useState, useEffect } from 'react';
import { POST_SIGNUP_API } from '../../config';
import ModalLogin from './modal/ModalLogin';
import ModalPersonal from './modal/ModalPersonal';
import ModalTerms from './modal/ModalTerms';
import ModalName from './modal/ModalName';
import ModalEmail from './modal/ModalEmail';
import ModalPassword from './modal/ModalPassword';
import ModalSignUp from './modal/ModalSignUp';

function LoginSignUp({ onClickSignIn }) {
  // 로그인/비밀번호 유효성 검증 state
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  // 사용자 key 입력 state
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // modal 관련 state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTermsOpen, setModalTermsOpen] = useState(false);
  const [modalPersonalOpen, setModalPersonalOpen] = useState(false);
  const [modalNameOpen, setModalNameOpen] = useState(false);
  const [modalEmailOpen, setModalEmailOpen] = useState(false);
  const [modalPasswordOpen, setModalPasswordOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);

  // 사용자가 입력한 이메일/비밀번호를 각각의 set 함수에 저장
  const handleIdInput = event => {
    setEmailInput(event.target.value);
  };
  const handlePwInput = event => {
    setPasswordInput(event.target.value);
  };
  const handleNameInput = event => {
    setNameInput(event.target.value);
  };

  // 이메일/비밀번호 유효성 검증 코드
  useEffect(() => {
    const nameValidation = nameInput.length >= 1;
    const emailValidation = emailInput.includes('@') && emailInput.length >= 5; // x@x.x
    const passwordValidation = passwordInput.length >= 5;

    nameValidation ? setNameValidation(true) : setNameValidation(false);
    emailValidation ? setEmailValidation(true) : setEmailValidation(false);
    passwordValidation
      ? setPasswordValidation(true)
      : setPasswordValidation(false);
  }, [nameInput, emailInput, passwordInput]);

  // 유효성이 검증된 이름/이메일/비밀번호를 백엔드로 전송
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
  };

  // 모달창 조건 코드
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  const modalTermsClose = () => {
    setModalTermsOpen(!modalTermsOpen);
  };
  const modalPersonalClose = () => {
    setModalPersonalOpen(!modalPersonalOpen);
  };
  const modalNameClose = () => {
    setModalNameOpen(!modalNameOpen);
  };
  const modalEmailClose = () => {
    setModalEmailOpen(!modalEmailOpen);
  };
  const modalPasswordClose = () => {
    setModalPasswordOpen(!modalPasswordOpen);
  };
  const modalSignUpClose = () => {
    setModalSignUpOpen(!modalSignUpOpen);
  };

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
        <button
          className="btn"
          type="submit"
          onClick={() => {
            if (nameValidation === false) {
              return modalNameClose();
            } else if (
              emailValidation === false &&
              nameValidation === true &&
              passwordValidation === true
            ) {
              return modalEmailClose();
            } else if (
              passwordValidation === false &&
              nameValidation === true &&
              emailValidation === true
            ) {
              return modalPasswordClose();
            } else if (
              nameValidation === true &&
              emailValidation === false &&
              passwordValidation === false
            ) {
              return modalClose();
            } else if (
              nameValidation === true &&
              emailValidation === true &&
              passwordValidation === true
            ) {
              goToHome();

              return modalSignUpClose();
            }
          }}
        >
          회원가입
        </button>
        {modalOpen && <ModalLogin modalClose={modalClose} />}
        {modalNameOpen && <ModalName modalNameClose={modalNameClose} />}
        {modalEmailOpen && <ModalEmail modalEmailClose={modalEmailClose} />}
        {modalPasswordOpen && (
          <ModalPassword modalPasswordClose={modalPasswordClose} />
        )}
        {modalSignUpOpen && <ModalSignUp onClickSignIn={onClickSignIn} />}
      </div>
    </div>
  );
}

export default LoginSignUp;
