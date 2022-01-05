import './TopNav.scss';

export default function TopNav() {
  return (
    <div className="weple-main-header-wrapper">
      <header className="weple-main-header">
        <nav className="weple-navbar">
          <div className="navbar-left">
            <a href="#">
              <h1>WEPLE</h1>
            </a>
            <ul className="header-menu">
              <li className="header-menu-list">
                <a href="#">홈</a>
              </li>
              <li className="header-menu-list">
                <a href="#">셀러</a>
              </li>
              <li className="header-menu-list">
                <a href="#">상품</a>
              </li>
              <li className="header-menu-list">
                <a href="#">공식굿즈</a>
              </li>
              <li className="header-menu-list">
                <a href="#">아트샵</a>
              </li>
              <li className="header-menu-list">
                <a href="#">기획전</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="cart">
              <a href="#" className="">
                <i class="fas fa-shopping-basket" />
              </a>
            </div>
            <button type="button" className="hamburger">
              <i class="fas fa-bars" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
