import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import ItemCard from './ItemCard';
import './ProductList.scss';

const ProductList = () => {
  const [listData, setListData] = useState();
  const [categoryId, setCategoryId] = useState('categoryId=1');
  const [subCategoryId, setSubCategoryId] = useState('');
  const [sortWord, setSortWord] = useState('&sortWord=popular');
  const [state, setState] = useState();
  const [modal, setModal] = useState(false);

  const upAndDown = () => {
    setState(!state);
  };

  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetch(
      `http://localhost:8000/products/list?${categoryId}${subCategoryId}${sortWord}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json', mode: 'cors' },
      }
    )
      .then(res => res.json())
      .then(data => setListData(data));
  }, [categoryId, sortWord, subCategoryId]);

  return (
    <div className="ProductList">
      <div className="listWrapper">
        <CategoryModal isOpen={openModal} modal={modal} />
        <div className="listHeader">
          <div className="listTitle">
            <div className="btnWrapper" onClick={openModal}>
              <button>머그컵</button>
              <FaAngleDown className="icon" />
            </div>
            <span>을</span>
            <div className="btnWrapper">
              <button onClick={upAndDown}>인기순</button>
              {state ? (
                <FaAngleUp className="icon" />
              ) : (
                <FaAngleDown className="icon" />
              )}
            </div>
            으로 보여줘.
          </div>
          <div className="filterBtn">
            <button>스타일 필터</button>
          </div>
        </div>
        {/*👇 리스트 카드 👇*/}
        <div className="listContent">
          {listData &&
            listData.list.map((e, i) => {
              return (
                <ItemCard
                  key={i}
                  imgUrl={e.imgUrl}
                  productName={e.productName}
                  price={e.price}
                  productId={e.productId}
                  quantity={e.quantity}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const CategoryModal = ({ isOpen, modal }) => {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/category', {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/category/sub', {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setSubCategory(data));
  }, []);

  return (
    <div>
      {modal ? (
        <div className="modal">
          <div className="modalWrapper">
            <div className="modalHeader">
              <div>카테고리 선택</div>
              <div className="closeBtn" onClick={isOpen}>
                <IoCloseSharp />
              </div>
            </div>
            <div className="modalBody">
              {subCategory &&
                subCategory.message.map((e, i) => (
                  <div key={i}>
                    <div className="category">{e.category}</div>
                    <button className="subCategory">{e.subCategory}</button>
                  </div>
                ))}
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

export default ProductList;
