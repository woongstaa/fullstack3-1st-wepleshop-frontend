import { Link } from 'react-router-dom';
import './card.scss';

const flowCard = ({ imgUrl, productName, productId }) => {
  return (
    <Link to="/detail" key={productId}>
      <div className="flowcard-wrapper">
        <div className="flowcard-img">
          <img src={imgUrl} alt={productName} />
        </div>
      </div>
    </Link>
  );
};

export default flowCard;
