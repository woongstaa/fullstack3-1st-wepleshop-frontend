import { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { GET_CATEGORY_API } from '../../config';

const CategoryModal = ({ isOpen, modal }) => {
  const [subCategory, setSubCategory] = useState();
  const [state, setState] = useState(false);

  const changeColor = () => {
    setState(!state);
  };

  useEffect(() => {
    fetch(GET_CATEGORY_API, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setSubCategory(data));
  }, []);

  return (
    <div>
      {console.log(subCategory && subCategory.message[0].category)}
      {modal ? (
        <div className="modal">
          <div className="modalWrapper">
            <div className="modalHeader">
              <div>카테고리 선택</div>
              <div className="closeBtn" onClick={isOpen}>
                <IoCloseSharp />
              </div>
            </div>
            {/* <div className="modalBody">
              {subCategory &&
                subCategory.message.map((e, i) => (
                  <div key={e.id}>
                    <div className="category">
                      {e.category === (e.categoryId = 1)}
                    </div>
                    <button className="subCategory">{e.subCategory}</button>
                  </div>
                ))}
            </div> */}
            <div className="modalBody">
              <div className="cateWrapper">
                <div className="categoryName">의류</div>
                <button
                  className={state ? 'clickedBtn' : 'unclickedBtn'}
                  onClick={changeColor}
                  type="radio"
                >
                  패딩
                </button>
                <button className="unclickedBtn">후드/집업</button>
                <button className="unclickedBtn">티셔츠</button>
              </div>
              <div className="cateWrapper">
                <div className="categoryName">리빙</div>
                <button className="unclickedBtn">머그컵</button>
                <button className="unclickedBtn">텀블러</button>
              </div>
              <div className="cateWrapper">
                <div className="categoryName">문구</div>
                <button className="unclickedBtn">사무용품</button>
                <button className="unclickedBtn">스티커</button>
              </div>
            </div>
            <div className="modalFooter">
              <button onClick={isOpen}>확인</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CategoryModal;
