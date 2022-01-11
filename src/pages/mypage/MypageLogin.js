import { useState, useEffect } from 'react';
import './Mypage.scss';

function MypageLogin() {
  const [userName, setUserName] = useState([]);
  const userIdValue = sessionStorage.getItem('ID');

  useEffect(() => {
    fetch(`http://localhost:8000/users/usernamefind`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', mode: 'cors' },
      body: JSON.stringify({
        userId: userIdValue,
      }),
    })
      .then(res => res.json())
      .then(data => setUserName(data.name));
  });

  return (
    <div className="myPageUserTop">
      <div className="myPageUser">
        <div className="myPageUserText">{userName}님, 반가워요.</div>
        <div className="myPageUserButtons">
          <div className="myPageUserButton">계정설정</div>
          <div className="myPageUserButton">로그아웃</div>
        </div>
      </div>
    </div>
  );
}

export default MypageLogin;
