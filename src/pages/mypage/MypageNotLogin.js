import { Link } from 'react-router-dom';
import './Mypage.scss';

function MypageNotLogin() {
  return (
    <div className="myPageTop">
      <p className="myPageTopText">크리에이터를 위한 위플샵을 만나보세요.</p>
      <div className="myPageTopButtons">
        <Link to="/login">
          <button className="myPageButton">로그인</button>
        </Link>
        <Link to={{ pathname: '/login', state: { isLogin: false } }}>
          <button className="myPageButton">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default MypageNotLogin;
