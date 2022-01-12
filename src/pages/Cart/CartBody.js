import { useEffect, useState } from 'react/cjs/react.development';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { IoCloseSharp } from 'react-icons/io5';
import { POST_CART_API } from '../../config';
import { DELETE_CART_API } from '../../config';
import './CartBody.scss';

const CartBody = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(0);
  const userId = sessionStorage.getItem('ID');

  const shipFee = 2500;

  useEffect(() => {
    fetch(POST_CART_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
      body: JSON.stringify({ userId: userId }),
    })
      .then(res => res.json())
      .then(data => {
        setData(data.cart);
      });
  }, [render]);

  // 가격 합계
  const sumPrice = () => {
    console.log(data);
    let result = 0;
    let sum = data.map((e, i) => {
      return e.price;
    });
    for (let i = 0; i < sum.length; i++) {
      result = result + sum[i];
    }
    return result;
  };

  // 카트에 담긴 아이템 갯수
  const sumAmount = () => {
    let result = 0;
    let sum = data.map((e, i) => {
      return e.quantity;
    });
    for (let i = 0; i < sum.length; i++) {
      result = result + sum[i];
    }
    return result;
  };

  return (
    <div className="CartBody">
      {console.log(data)}
      {data === undefined || data.length === 0 ? (
        <div className="emptyCart">
          <FontAwesomeIcon icon={faShoppingBasket} id="icon" />
          <div className="comment">비어있는 장바구니를 채워주세요!</div>
        </div>
      ) : (
        <div className="cart">
          {data.map((e, i) => {
            return (
              <CartItemCard
                key={e.id}
                imgUrl={e.image}
                productName={e.name}
                price={e.price}
                size={e.size}
                quantity={e.quantity}
                color={e.color}
                userId={userId}
                productId={e.product_id}
                render={render}
                setRender={setRender}
              />
            );
          })}
          <div className="cartSummary">
            <div className="summaryWarpper">
              <div className="summaryHeader">결제 금액</div>
              <div className="summaryBody">
                <div className="calPrice">
                  <div className="calWarpper">
                    <div>총 수량</div>
                    <div>{sumAmount()}개</div>
                  </div>
                  <div className="calWarpper">
                    <div>가격</div>
                    <div>{sumPrice().toLocaleString()}원</div>
                  </div>
                  <div className="calWarpper">
                    <div>배송비</div>
                    <div>{shipFee.toLocaleString()}원</div>
                  </div>
                </div>
                <div className="totalPrice">
                  <div>합계</div>
                  <div>{(sumPrice() + shipFee).toLocaleString()}원</div>
                </div>
              </div>
              <button className="summaryFooter">주문서 작성</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CartItemCard = ({
  imgUrl,
  productName,
  price,
  size,
  quantity,
  color,
  userId,
  productId,
  setRender,
  render,
}) => {
  const deleteFromCart = () => {
    fetch(DELETE_CART_API, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
        color: color,
        size: size,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRender(render - 1);
        console.log(render);
      });
  };
  return (
    <div className="CartItemCard">
      <div className="iconWrapper">
        <IoCloseSharp className="icon" onClick={deleteFromCart} />
      </div>
      <div className="cardWrapper">
        <div className="imgWrapper">
          <img src={imgUrl} alt={productName} />
        </div>
        <div className="cardRight">
          <div className="nameAndColor">
            <div className="productName">{productName}</div>
            <div className="productColor">{color}</div>
          </div>
          <div className="productPrice">{price}원</div>
        </div>
      </div>
      <div className="cardFooter">
        <div className="size">{size}</div>
        <div className="amount">{quantity}개</div>
      </div>
    </div>
  );
};

export default CartBody;
