import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useEffect } from 'react/cjs/react.development';

const ItemCard = ({ imgUrl, productName, price, quantity, key, productId }) => {
  const [state, setState] = useState(false);
  const userId = window.sessionStorage.getItem('ID');

  useEffect(() => {
    fetch('http://localhost:8000/users/likeandunlike', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        mode: 'cors',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // localStorage.getItem('like');
      });
  }, []);

  const clickLike = () => {
    console.log(userId);
    if (userId && state === false) {
      fetch('http://localhost:8000/users/likeandunlike', {
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
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setState(!state);
          // localStorage.setItem('like');
          // sessionStorage.getItem('like');
        });
    } else if (userId && state === true) {
      fetch('http://localhost:8000/users/likeandunlike', {
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
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setState(!state);
          // localStorage.removeItem('like');
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
