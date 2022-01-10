import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCard = ({ imgUrl, productName, price, quantity, id, productId }) => {
  const [state, setState] = useState();
  const userId = sessionStorage.getItem('token');

  const clickLike = () => {
    if (userId && state === false) {
      fetch('http://localhost:8000/users/like', {
        method: 'POST',
        headers: { 'Content-type': 'application/json', mode: 'cors' },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      });
      setState(!state);
    } else if (userId && state === true) {
      fetch('http://localhost:8000/users/unlike', {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json', mode: 'cors' },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      });
      setState(!state);
    }
  };

  return (
    <div className="listCard" key={id}>
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
            <div className="itemStatusLessTen">{`${quantity}개 남음`}</div>
          )
        )}
      </div>
      <div className="itemTitle">
        <Link to="/detail">{productName}</Link>
      </div>
      <div className="itemPrice">
        <span>₩ </span>
        {price.toLocaleString()}
      </div>
    </div>
  );
};

export default ItemCard;
