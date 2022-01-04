import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCard = ({ imgUrl, productName, price, quantity, i }) => {
  const [state, setState] = useState();

  const clickLike = () => {
    setState(!state);
  };

  return (
    <div className="listCard" key={i}>
      <div className="imgWrapper">
        <Link to="/detail">
          <img className="listImg" src={imgUrl} alt={productName} />
        </Link>
        <div className="likeBtnWrapper">
          <button className="likeBtn" onClick={clickLike}>
            {state ? (
              <FaHeart className="liked" />
            ) : (
              <FaRegHeart className="unliked" />
            )}
          </button>
        </div>
        {quantity === 0 ? (
          <div className="itemStatusSoldOut">매진</div>
        ) : (
          quantity <= 10 && (
            <div className="itemStatusLessTen">재고 10개 이하</div>
          )
        )}
      </div>
      <div className="itemTitle">
        <Link to="/detail">{productName}</Link>
      </div>
      <div className="itemPrice">
        <span>₩ </span>
        {price}
      </div>
    </div>
  );
};

export default ItemCard;
