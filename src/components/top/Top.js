import './Top.scss';

function Top() {
  return (
    <div className="topContainer">
      <header className="headerContainer">
        <div className="headerWrapper">
          <nav className="headerLeft">
            <a href="/" className="wepleLogoWrapper">
              <h1>WEPLE</h1>
              <div className="wepleLogo" />
            </a>
            <ul className="headerList">
              <li className="headerListMenu">
                <a href="/" id="homeMenu">
                  홈
                </a>
              </li>
              <li className="headerListMenu">
                <a href="#">셀러</a>
              </li>
              <li className="headerListMenu">
                <a href="#">상품</a>
              </li>
              <li className="headerListMenu">
                <a href="#">공식굿즈</a>
              </li>
              <li className="headerListMenu">
                <a href="#">아트샵</a>
              </li>
              <li className="headerListMenu">
                <a href="#">기획전</a>
              </li>
            </ul>
          </nav>
          <div className="headerRight">
            <div className="cart">
              <a href="#">
                <i className="fa fa-shopping-basket" />
              </a>
            </div>
            <button type="button" className="hamburger">
              <i className="fa fa-bars" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Top;
