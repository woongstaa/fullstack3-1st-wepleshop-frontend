import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCard = ({ imgUrl, productName, price, quantity, key, productId }) => {
  const [state, setState] = useState(false);
  const userId = window.sessionStorage.getItem('ID');

  const clickLike = () => {
    console.log(userId);
    if (userId && state === false) {
      fetch('http://localhost:8000/users/like', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          mode: 'cors',
          // Authorization: 'token',
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setState(!state);
        });
    } else if (userId && state === true) {
      fetch('http://localhost:8000/users/unlike', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          mode: 'cors',
          // Authorization: 'token',
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res.data);
          setState(!state);
        });
    }
    console.log(state);
  };
  return (
    <div className="listCard" key={key}>
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
