import { React, useState, useEffect } from 'react';
import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare as regularShare } from '@fortawesome/free-regular-svg-icons';
import ImageSlider from './ImageSlider';

import ColorList from './ColorList';
import SizeList from './SizeList';
import queryString from 'query-string';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import TopDetail from '../../components/top/TopDetail';

function Detail() {
  const [product, setProduct] = useState([]);
  const [productName, productNameSet] = useState('');
  let productColor = [];
  let productColorHex = [];
  let productSize = [];
  const [productPrice, productPriceSet] = useState(1000);
  let productImgUrl = [];
  const [imgUrl, urlSetting] = useState([]);
  const parsedQuery = queryString.parse(window.location.search);
  const getId = parsedQuery.productId;
  const [idValue, idSet] = useState(getId);
  useEffect(() => {
    fetch(`http://localhost:8000/products/details?productId=${idValue}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => {
        setProduct(data);

        productNameSet(Object.values(data[0])[1]); // 제품 이름
        productPriceSet(data[0].productPrice);

        for (let i = 0; i < Object.values(data).length; i++) {
          if (productImgUrl.indexOf(Object.values(data[i])[7]) === -1) {
            productImgUrl.push(Object.values(data[i])[7]);
          }
        }
        let img = [...productImgUrl];
        urlSetting(img); //제품 이미지
      });
  }, []);

  for (let i = 0; i < Object.values(product).length; i++) {
    if (productColor.indexOf(Object.values(product[i])[4]) === -1) {
      productColor.push(Object.values(product[i])[4]);
    }
  }

  for (let i = 0; i < Object.values(product).length; i++) {
    if (productColorHex.indexOf(Object.values(product[i])[5]) === -1) {
      productColorHex.push(Object.values(product[i])[5]);
    }
  }

  for (let i = 0; i < Object.values(product).length; i++) {
    if (productSize.indexOf(Object.values(product[i])[6]) === -1) {
      productSize.push(Object.values(product[i])[6]);
    }
  }

  const [quantity, quantityUpdate] = useState(1);

  const plus = () => {
    quantityUpdate(quantity + 1);
  };
  const minus = () => {
    if (quantity > 1) quantityUpdate(quantity - 1);
    else {
      alert('최소 구매 수량은 1개 이상입니다.');
    }
  };

  const [heartshape, heartshapeChange] = useState(regularHeart);
  function heartClick() {
    if (heartshape === regularHeart) {
      heartshapeChange(solidHeart);
    } else {
      heartshapeChange(regularHeart);
    }
  }

  return (
    <>
      <div className="sectionContainer">
        <TopDetail />
        <div className="mainWrapper">
          <div className="body">
            <div>
              <div className="DetailBody">
                <div className="DetailContent">
                  <div className="DetailPreview">
                    <ImageSlider slides={imgUrl} />

                    <div className="DetailSeller">
                      <a href="#" className="DetailSellerLink">
                        <img
                          src="/images/designers/1.jpeg"
                          alt="판매자아이콘"
                          className="DetailSellerIcon"
                        />
                        <div className="DetailSellerInfo">
                          <span>Designed by</span>
                          <h3>Dok2</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="DetailForm">
                  <div className="DetailInfo">
                    <div className="ProductName">
                      <span>{productName}</span>
                      <p>최고의 제품입니다.</p>
                      <p className="price">
                        {productPrice.toLocaleString()} 원
                      </p>
                    </div>
                    <div className="ShareAndHeart">
                      <a href="#">
                        <FontAwesomeIcon icon={regularShare} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={heartshape}
                          onClick={heartClick}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="DetailColor">
                    <p className="ColorMain">색상</p>
                    <ul className="ColorRadioBox">
                      {productColor &&
                        productColor.map((e, i) => {
                          return <ColorList color={e} key={i} />;
                        })}
                    </ul>
                  </div>
                  <div className="DetailSize">
                    <p className="SizeMain">사이즈</p>
                    <ul className="SizeChart">
                      {productSize &&
                        productSize.map((e, i) => {
                          return <SizeList size={e} key={i} />;
                        })}
                    </ul>
                  </div>

                  <div className="DetailQuantity">
                    <p className="Quantity">수량</p>

                    <div className="QuantityBox">
                      <button onClick={minus}>-</button>
                      <input type="text" readonly="" value={quantity} />
                      <button onClick={plus}>+</button>
                    </div>

                    <div className="GrayLine" />

                    <div className="Guide">
                      <span className="Guide_Icon" />
                      <span className="GuideText">
                        지금 주문하면&nbsp;<strong>1/12 ~ 1/19</strong>
                        &nbsp;사이에 출발해요!
                      </span>
                    </div>

                    <div className="DetailPrice">
                      <div className="PricePerItem">{quantity}개 상품 금액</div>
                      <div className="Price">
                        {(productPrice * quantity).toLocaleString()} 원
                      </div>
                    </div>
                  </div>

                  <div className="ProductNotify">
                    <div className="Period" data-item_name="period_limit">
                      ⏰&nbsp; 2022/01/01 ~ 2022/06/01
                    </div>
                  </div>

                  <div className="CartButton">
                    <button
                      className="AddButton"
                      type="button"
                      data-action="cart"
                    >
                      <span className="Add">장바구니에 담기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Nav />
    </>
  );
}

export default Detail;
