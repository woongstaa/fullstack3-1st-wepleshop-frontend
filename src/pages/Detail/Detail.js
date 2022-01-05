import { useState, useEffect } from "react";
import React from "react";
import "./Detail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare as regularShare } from "@fortawesome/free-regular-svg-icons";

function Detail() {
  const [quantity, quantityUpdate] = useState(1);

  const plus = () => {
    quantityUpdate(quantity + 1);
  };
  const minus = () => {
    if (quantity > 1) quantityUpdate(quantity - 1);
    else {
      alert("최소 구매 수량은 1개 이상입니다.");
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
      <div>
        <div className='DetailBody'>
          <div className='DetailContent'>
            <div className='DetailPreview'>
              <img
                src='/images/티셔츠.jpeg'
                alt='커피'
                className='ProductImg'
              />

              <div className='DetailSeller'>
                <a href='#' className='DetailSellerLink'>
                  <img
                    src='/images/최홍자.jpeg'
                    alt='판매자아이콘'
                    className='DetailSellerIcon'
                  ></img>
                  <div className='DetailSellerInfo'>
                    <span>Designed by</span>
                    <h3>최홍자</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className='DetailForm'>
            <div className='DetailInfo'>
              <div className='ProductName'>
                <span>Hongja XXX Side printing Hoodie</span>
                <p>글리머 드라이 기모 후드</p>
                <p className='price'>58,000 원</p>
              </div>
              <div className='ShareAndHeart'>
                <a href='#'>
                  <FontAwesomeIcon icon={regularShare} />
                </a>
                <a href='#'>
                  <FontAwesomeIcon icon={heartshape} onClick={heartClick} />
                </a>
              </div>
            </div>
            <div className='DetailColor'>
              <p className='ColorMain'>색상</p>
              <ul className='ColorRadioBox'>
                {/* <li className='ColorCheckBox'>
                  <label className='pd-radio'>
                    <input
                      type='radio'
                      name='color'
                      checked=''
                      data-price='0'
                      value='24449'
                    />
                    <span className='pd-radio__face' title='블랙'>
                      <span className='pd-radio__face--color'></span>
                    </span>
                    <span className='pd-radio__text' title='블랙'>
                      블랙
                    </span>
                  </label>
                </li> */}
                <li>
                  <input type='radio' name='color' id='black'></input>
                  <label for='black' className='black'>
                    블랙
                  </label>
                </li>
                <li>
                  <input type='radio' name='color' id='gray'></input>
                  <label for='gray' className='gray'>
                    그레이
                  </label>
                </li>
                <li>
                  <input type='radio' name='color' id='skyblue'></input>
                  <label for='skyblue' className='skyblue'>
                    블루
                  </label>
                </li>
              </ul>
            </div>
            <div className='DetailSize'>
              <p className='SizeMain'>사이즈</p>
              <ul className='SizeChart'>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='xs'></input>
                  <label for='xs' className='xs'>
                    XS
                  </label>
                </li>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='s'></input>
                  <label for='s'>S</label>
                </li>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='m'></input>
                  <label for='m'>M</label>
                </li>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='l'></input>
                  <label for='l'>L</label>
                </li>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='xl'></input>
                  <label for='xl'>XL</label>
                </li>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='xxl'></input>
                  <label for='xxl'>XXL</label>
                </li>
                <li className='SizeCheckBox'>
                  <input type='radio' name='size' id='xxxl'></input>
                  <label for='xxxl'>XXXL</label>
                </li>
              </ul>
            </div>

            <div className='DetailQuantity'>
              <p className='Quantity'>수량</p>

              <div className='QuantityBox'>
                <button onClick={minus}>-</button>
                <input type='text' readonly='' value={quantity}></input>
                <button onClick={plus}>+</button>
              </div>

              <div className='GrayLine'></div>

              <div className='Guide'>
                <span className='Guide_Icon'></span>
                <span className='GuideText'>
                  지금 주문하면&nbsp;<strong>1/12 ~ 1/19</strong>&nbsp;사이에
                  출발해요!
                </span>
              </div>

              <div className='DetailPrice'>
                <div className='PricePerItem'>1개 상품 금액</div>
                <div className='Price'>58,000원</div>
              </div>
            </div>

            <div className='ProductNotify'>
              <div className='Period' data-item_name='period_limit'>
                ⏰&nbsp; 2022/01/01 ~ 2022/06/01
              </div>
            </div>

            <div className='CartButton'>
              <button className='AddButton' type='button' data-action='cart'>
                <span className='Add'>장바구니에 담기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
