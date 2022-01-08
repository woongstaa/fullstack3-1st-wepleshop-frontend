import './Top.scss';
import { useState } from 'react';
import { GET_PRODUCT_API } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Top() {
  const [] = useState(['blue', 'grey']);

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
                <Link to="/list">상품</Link>
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
                <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" />
              </a>
            </div>
            <button type="button" className="hamburger">
              <FontAwesomeIcon icon={faBars} className="hamburgerIcon" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Top;
