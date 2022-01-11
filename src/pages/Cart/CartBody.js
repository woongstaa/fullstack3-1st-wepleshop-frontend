import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';
import './CartBody.scss';
import { useState } from 'react/cjs/react.development';
import { IoCloseSharp } from 'react-icons/io5';

const CartBody = () => {
  const [cart, setCart] = useState(true);
  const shipFee = 2500;

  const isEmpty = () => {
    setCart(!cart);
  };

  const sumPrice = () => {
    let result = 0;
    let sum = cartMock.map((e, i) => {
      return e.price;
    });
    for (let i = 0; i < sum.length; i++) {
      result = result + sum[i];
    }
    return result;
  };

  const sumAmount = () => {
    let result = 0;
    let sum = cartMock.map((e, i) => {
      return e.amount;
    });
    for (let i = 0; i < sum.length; i++) {
      result = result + sum[i];
    }
    return result;
  };

  return (
    <div className="CartBody">
      {cart ? (
        <div className="cart">
          {cartMock.map((e, i) => {
            return (
              <CartItemCard
                imgUrl={e.imgUrl}
                key={e.productId}
                productName={e.productName}
                price={e.price}
                size={e.size}
                amount={e.amount}
                color={e.color}
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
      ) : (
        <div className="emptyCart">
          <FontAwesomeIcon icon={faShoppingBasket} id="icon" />
          <div className="comment">비어있는 장바구니를 채워주세요!</div>
        </div>
      )}
    </div>
  );
};

const cartMock = [
  {
    productId: 1,
    imgUrl: '/images/clothes/item1/1.jpeg',
    productName: 'Black Noise Hooddie For Narcissist',
    price: 60000,
    size: 'XS',
    amount: 1,
    color: 'Black',
  },
  {
    productId: 2,
    imgUrl: '/images/clothes/item2/1.jpeg',
    productName: 'White Noise Hooddie For Narcissist',
    price: 80000,
    size: 'S',
    amount: 1,
    color: 'White',
  },
];

const CartItemCard = ({
  imgUrl,
  productName,
  price,
  size,
  amount,
  color,
  setSumAmount,
  setSumPrice,
}) => {
  const sumAmout = () => {};

  return (
    <div className="CartItemCard">
      <div className="iconWrapper">
        <IoCloseSharp className="icon" />
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
          <div className="productPrice">{price.toLocaleString()}원</div>
        </div>
      </div>
      <div className="cardFooter">
        <div className="size">{size}</div>
        <div className="amount">{amount}개</div>
      </div>
    </div>
  );
};

export default CartBody;
