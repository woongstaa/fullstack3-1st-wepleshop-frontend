function LoginSignIn() {
  return (
    <div id="loginSignInContainer">
      <div className="inputWrapper">
        <p className="inputTitle">이메일</p>
        <input type="email" placeholder="이메일" />
      </div>
      <div className="inputWrapper">
        <p className="inputTitle">비밀번호 (6자리 이상)</p>
        <input type="password" placeholder="비밀번호 (6자리 이상)" />
      </div>
      <div className="submit">
        <button className="btn">로그인</button>
      </div>
      <div className="forgotPassword">
        <span id="emailPassword">아이디 / 비밀번호 찾기</span>
      </div>
    </div>
  );
}

export default LoginSignIn;
