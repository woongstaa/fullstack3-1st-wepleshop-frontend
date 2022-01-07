import { React, useState, useEffect } from 'react';
import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare as regularShare } from '@fortawesome/free-regular-svg-icons';
import ImageSlider from './ImageSlider';

import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import TopDetail from '../../components/top/TopDetail';

function Detail() {
  const [productName, productNameSet] = useState('');
  let productColor = [];

  let productColorHex = [];

  let productSizePerColor = {};

  const [productPrice, productPriceSet] = useState(1000);
  let productImgUrl = [];
  const [imgUrl, urlSetting] = useState([]);
  // const [colorHex, colorHexSet] = useState([]);

  const [idValue, idSet] = useState(2);
  useEffect(() => {
    fetch('http://localhost:8000/products/details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', mode: 'cors' },
      body: JSON.stringify({
        id: idValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        productNameSet(Object.values(data[0])[1]); // 제품 이름

        for (let i = 0; i < Object.values(data).length; i++) {
          if (productColor.indexOf(Object.values(data[i])[4]) === -1) {
            productColor.push(Object.values(data[i])[4]);
          }
        }

        for (let i = 0; i < Object.values(data).length; i++) {
          if (productColorHex.indexOf(Object.values(data[i])[5]) === -1) {
            productColorHex.push(Object.values(data[i])[5]);
          }
        }

        for (let i = 0; i < data.length; i++) {
          if (productSizePerColor[data[i].colorName] === undefined) {
            productSizePerColor[data[i].colorName] = [data[i].sizeName];
          } else {
            if (
              productSizePerColor[data[i].colorName].indexOf(
                data[i].sizeName
              ) === -1
            ) {
              productSizePerColor[data[i].colorName].push(data[i].sizeName);
            }
          }
        }

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
    } // 하트 버튼 기능
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
                          src="/images/dok2.jpeg"
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
                      <li>
                        <input type="radio" name="color" id="black" />
                        <label for="black" className="black">
                          블랙
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="color" id="gray" />
                        <label for="gray" className="gray">
                          그레이
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="color" id="skyblue" />
                        <label for="skyblue" className="skyblue">
                          블루
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="DetailSize">
                    <p className="SizeMain">사이즈</p>
                    <ul className="SizeChart">
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="xs" />
                        <label for="xs" className="xs">
                          XS
                        </label>
                      </li>
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="s" />
                        <label for="s">S</label>
                      </li>
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="m" />
                        <label for="m">M</label>
                      </li>
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="l" />
                        <label for="l">L</label>
                      </li>
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="xl" />
                        <label for="xl">XL</label>
                      </li>
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="xxl" />
                        <label for="xxl">XXL</label>
                      </li>
                      <li className="SizeCheckBox">
                        <input type="radio" name="size" id="xxxl" />
                        <label for="xxxl">XXXL</label>
                      </li>
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
