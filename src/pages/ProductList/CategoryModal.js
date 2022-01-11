import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CategoryModal = ({ isOpen, modal }) => {
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
              <div className="cateWrapper">
                <div className="categoryName">의류</div>
                <Link to="?categoryId=1">
                  <button className="unclickedBtn">전체</button>
                </Link>
                <Link to="?categoryId=1&subCategoryId=1">
                  <button className="unclickedBtn">패딩</button>
                </Link>
                <Link to="?categoryId=1&subCategoryId=2">
                  <button className="unclickedBtn">후드/집업</button>
                </Link>
                <Link to="?categoryId=1&subCategoryId=3">
                  <button className="unclickedBtn">티셔츠</button>
                </Link>
              </div>
              <div className="cateWrapper">
                <div className="categoryName">리빙</div>
                <Link to="?categoryId=2">
                  <button className="unclickedBtn">전체</button>
                </Link>
                <Link to="?categoryId=2&subCategoryId=4">
                  <button className="unclickedBtn">머그컵</button>
                </Link>
                <Link to="?categoryId=2&subCategoryId=5">
                  <button className="unclickedBtn">텀블러</button>
                </Link>
              </div>
              <div className="cateWrapper">
                <div className="categoryName">문구</div>
                <Link to="?categoryId=3">
                  <button className="unclickedBtn">전체</button>
                </Link>
                <Link to="?categoryId=3&subCategoryId=6">
                  <button className="unclickedBtn">사무용품</button>
                </Link>
                <Link to="?categoryId=3&subCategoryId=7">
                  <button className="unclickedBtn">스티커</button>
                </Link>
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
