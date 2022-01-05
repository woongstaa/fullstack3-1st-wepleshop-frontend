import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalLogin from '../../components/ModalLogin';
import ModalPersonal from '../../components/ModalPersonal';
import ModalTerms from '../../components/ModalTerms';

function LoginSignUp() {
  const [validation, setValidation] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [personalModalOpen, setPersonalModalOpen] = useState(false);

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
    const passwordValidation = passwordInput.length > 6;

    if (emailValidation && passwordValidation) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [emailInput, passwordInput]);

  useEffect(() => {
    fetch('http://localhost:8000/users/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      }),
    });
  });

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const termsModalClose = () => {
    setTermsModalOpen(!termsModalOpen);
  };

  const personalModalClose = () => {
    setPersonalModalOpen(!personalModalOpen);
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
          <span className="agreeContents" onClick={termsModalClose}>
            보기
          </span>
          {termsModalOpen && <ModalTerms termsModalClose={termsModalClose} />}
        </label>
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">개인정보수집·이용 동의</span>
          <span className="agreeContents" onClick={personalModalClose}>
            보기
          </span>
          {personalModalOpen && (
            <ModalPersonal personalModalClose={personalModalClose} />
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
        {modalOpen && <ModalLogin modalClose={modalClose} />}
      </div>
    </div>
  );
}

export default LoginSignUp;
