import './CartTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';

function CartTop() {
  const navigate = useNavigate();

  return (
    <div className="topContainer">
      <header className="headerContainer">
        <div className="headerWrapper">
          <nav className="headerLeft">
            <button onClick={() => navigate(-1)}>
              <AiOutlineLeft className="icon" />
            </button>
            <h1>장바구니</h1>
          </nav>
          <div className="headerRight">
            <div className="cart">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" />
              </Link>
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

export default CartTop;
