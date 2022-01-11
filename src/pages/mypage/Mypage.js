import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import Top from '../../components/top/Top';
import MypageNotLogin from './MypageNotLogin';
import MypageLogin from './MypageLogin';
import './Mypage.scss';

function Mypage() {
  let yourID = sessionStorage.getItem('ID');

  return (
    <div>
      <Top />
      <Nav />
      <div className="Mypage">
        {yourID ? <MypageLogin /> : <MypageNotLogin />}
        <div className="myPageMain">
          <div className="myPageMainShopping">
            <h2 className="myPageMainTitle">쇼핑정보</h2>
            <div className="myPageMainMenu">
              <ul>
                <li className="myPageMainItem">
                  <Link to="/cart" className="myPageMainButton">
                    <span>장바구니</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="myPageMainCenter" />
          <div className="myPageMainCustomer">
            <h2 className="myPageMainTitle">고객센터</h2>
            <div className="myPageMainMenu">
              <ul>
                <li className="myPageMainItem">
                  <Link to="/" className="myPageMainButton">
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className="myPageMainItem">
                  <Link to="/" className="myPageMainButton">
                    <span>이메일 상담</span>
                  </Link>
                </li>
                <li className="myPageMainItem">
                  <Link to="/" className="myPageMainButton">
                    <span>1:1 문의</span>
                  </Link>
                </li>
                <li className="myPageMainItem">
                  <Link to="/" className="myPageMainButton">
                    <span>신고 접수 서비스</span>
                  </Link>
                </li>
                <li className="myPageMainItem">
                  <Link to="/" className="myPageMainButton">
                    <span>사이트 이용 시 유의사항</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mypage;
