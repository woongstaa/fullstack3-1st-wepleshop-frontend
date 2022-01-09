import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCard = ({ imgUrl, productName, price, quantity, productId }) => {
  const [state, setState] = useState();

  const clickLike = () => {
    setState(!state);
  };
  return (
    <div className="listCard" key={productId}>
      <div className="imgWrapper">
        <Link to={`/detail?productId=${productId}`}>
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
            <div className="itemStatusLessTen">{`${quantity}개 남음`}</div>
          )
        )}
      </div>
      <div className="itemTitle">
        <Link to={`/detail?productId=${productId}`}>{productName}</Link>
      </div>
      <div className="itemPrice">
        <span>₩ </span>
        {price.toLocaleString()}
      </div>
    </div>
  );
};

export default ItemCard;
