import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ItemCard from './ItemCard';
import CategoryModal from './CategoryModal';
import './ProductList.scss';

const ProductList = () => {
  const [listData, setListData] = useState();
  const [categoryId, setCategoryId] = useState('categoryId=3');
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

  const convertToMainImgList = listData => {
    const newListData = listData.list.filter((element, index, callback) => {
      return (
        (element.imgUrl.includes('1.jpg') ||
          element.imgUrl.includes('1.jpeg')) &&
        index === callback.findIndex(t => t.productId === element.productId)
      );
    });
    listData.list = newListData;
    return listData;
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
      .then(data => setListData(convertToMainImgList(data)));
  }, [categoryId, sortWord, subCategoryId]);

  return (
    <div className="ProductList">
      <div className="listWrapper">
        <CategoryModal isOpen={openModal} modal={modal} />
        <div className="listHeader">
          <div className="listTitle">
            <div className="btnWrapper" onClick={openModal}>
              <button>전체</button>
              <FaAngleDown className="icon" />
            </div>
            <span>를&nbsp;</span>
            <div className="btnWrapper" onClick={upAndDown}>
              <button>인기순</button>
              {state ? (
                <FaAngleUp className="icon" />
              ) : (
                <FaAngleDown className="icon" />
              )}
            </div>
            <span>으로 보여줘.</span>
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
                  key={e.id}
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

export default ProductList;
