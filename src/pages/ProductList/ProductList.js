/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ItemCard from './ItemCard';
import CategoryModal from './CategoryModal';
import SortModal from './SortModal';
import './ProductList.scss';

const ProductList = () => {
  const [listData, setListData] = useState();
  const [state, setState] = useState();
  const [modal, setModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const useParams = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useParams();
  const location = useLocation();

  const upAndDown = () => {
    setState(!state);
  };

  const openModal = () => {
    setModal(!modal);
  };

  const openSortModal = () => {
    setSortModal(!sortModal);
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

  const URL = `http://localhost:8000/products/list?categoryId=${query.get(
    'categoryId'
  )}&subCategoryId=${query.get('subCategoryId')}&sortWord=${query.get(
    'sortWord'
  )}`;

  const BASIC_URL = `http://localhost:8000/products/list?categoryId=${query.get(
    'categoryId'
  )}&subCategoryId=${query.get('subCategoryId')}&sortWord=popular`;

  const SORT_URL = `?categoryId=${query.get(
    'categoryId'
  )}&subCategoryId=${query.get('subCategoryId')}`;

  useEffect(() => {
    fetch(BASIC_URL, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => {
        setListData(convertToMainImgList(data));
      });
  }, [location]);

  //필터링 버튼
  useEffect(() => {
    if (query.get('categoryId') === '1' && query.get('subCategoryId') === '1') {
      setCategoryName('패딩');
    } else if (
      query.get('categoryId') === '1' &&
      query.get('subCategoryId') === '2'
    ) {
      setCategoryName('후드/집업');
    } else if (
      query.get('categoryId') === '1' &&
      query.get('subCategoryId') === '3'
    ) {
      setCategoryName('티셔츠');
    } else if (query.get('categoryId') === '1') {
      setCategoryName('의류');
    } else if (
      query.get('categoryId') === '2' &&
      query.get('subCategoryId') === '4'
    ) {
      setCategoryName('머그컵');
    } else if (
      query.get('categoryId') === '2' &&
      query.get('subCategoryId') === '5'
    ) {
      setCategoryName('텀블러');
    } else if (query.get('categoryId') === '2') {
      setCategoryName('리빙');
    } else if (
      query.get('categoryId') === '3' &&
      query.get('subCategoryId') === '6'
    ) {
      setCategoryName('사무용품');
    } else if (
      query.get('categoryId') === '3' &&
      query.get('subCategoryId') === '7'
    ) {
      setCategoryName('스티커');
    } else if (query.get('categoryId') === '3') {
      setCategoryName('문구');
    } else {
      setCategoryName('전체');
    }
  }, [location]);
  return (
    <div className="ProductList">
      <div className="listWrapper">
        <SortModal sortModal={sortModal} SORT_URL={SORT_URL} /> {/*정렬 모달*/}
        <CategoryModal isOpen={openModal} modal={modal} /> {/*카테고리 모달*/}
        <div className="listHeader">
          <div className="listTitle">
            <div className="btnWrapper" onClick={openModal}>
              <button>{categoryName}</button>
              <FaAngleDown className="icon" />
            </div>
            <span>를&nbsp;</span>
            <div onClick={upAndDown}>
              <div className="btnWrapper" onClick={openSortModal}>
                <button>인기순</button>
                {state ? (
                  <FaAngleUp className="icon" />
                ) : (
                  <FaAngleDown className="icon" />
                )}
              </div>
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
                  // key={e.productId}
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
