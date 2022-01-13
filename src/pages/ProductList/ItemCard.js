import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { POST_LIKE_API, POST_UNLIKE_API } from '../../config';

const ItemCard = ({ imgUrl, productName, price, quantity, key, productId }) => {
  const [state, setState] = useState(false);
  const [condition, setCondition] = useState(true);
  const userId = window.sessionStorage.getItem('ID');

  const clickLikes = () => {
    setCondition(false);
    setState(!state);
  };

  useEffect(() => {
    if (userId && state === true && condition === false) {
      fetch(POST_LIKE_API, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          mode: 'cors',
          Authorization: 'token',
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      });
    } else if (userId && state === false && condition === false) {
      fetch(POST_UNLIKE_API, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          mode: 'cors',
          Authorization: 'token',
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      });
    }
  }, [state]);

  return (
    <div className="listCard" key={key}>
      <div className="imgWrapper">
        <Link to={`/detail?productId=${productId}`}>
          <img className="listImg" src={imgUrl} alt={productName} />
        </Link>
        <div className="likeBtnWrapper">
          <button className="likeBtn" onClick={clickLikes}>
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
