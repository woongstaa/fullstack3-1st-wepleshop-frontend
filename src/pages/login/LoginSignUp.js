function LoginSignUp() {
  return (
    <div id="loginSignUpContainer">
      <div className="inputWrapper">
        <p className="inputTitle">이름</p>
        <input type="text" placeholder="이름" />
      </div>
      <div className="inputWrapper">
        <p className="inputTitle">이메일</p>
        <input type="email" placeholder="이메일" />
      </div>
      <div className="inputWrapper">
        <p className="inputTitle">비밀번호 (6자리 이상)</p>
        <input type="password" placeholder="비밀번호 (6자리 이상)" />
      </div>
      <div className="agreeEmail">
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">이용약관 동의</span>
          <span>
            <a href="text">보기</a>
          </span>
        </label>
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">이용약관 동의</span>
          <span>
            <a href="text">보기</a>
          </span>
        </label>
        <label>
          <input className="check" type="checkbox" name="checkAgree" />
          <span className="agree">개인정보수집·이용 동의</span>
          <span>
            <a href="text">보기</a>
          </span>
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
        <button className="btn">회원가입</button>
      </div>
    </div>
  );
}

export default LoginSignUp;
