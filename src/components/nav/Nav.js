import './Nav.scss';

function Nav() {
  return (
    <div className="navContainer">
      <div className="navCategory">
        <a href="#">
          <div className="shoppingMenu" />
          <span>쇼핑</span>
        </a>
        <a href="#">
          <div className="liveMenu" />
          <span>실시간</span>
        </a>
        <a href="#">
          <div className="reviewMenu" />
          <span>리뷰</span>
        </a>
        <a href="#">
          <div className="searchMenu" />
          <span>검색</span>
        </a>
        <a href="#">
          <div className="myPageMenu" />
          <span>마이페이지</span>
        </a>
      </div>
      <div className="navLogo">
        <a href="/" className="navLogoWrapper">
          <div className="navLogoImg" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
