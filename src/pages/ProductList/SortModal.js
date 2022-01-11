import { Link, useNavigate } from 'react-router-dom';
import './SortModal.scss';

const SortModal = ({ sortModal, SORT_URL }) => {
  const navigate = useNavigate();
  return (
    <div>
      {sortModal ? (
        <div className="sortModal">
          <div className="sortModalWrapper">
            <Link to={`${SORT_URL}&sortWord=popular`}>
              <div>인기순</div>
            </Link>
            <div>리뷰 많은 순</div>
            <div>최근 팔린 순</div>
            <div>신규 등록 순</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SortModal;
