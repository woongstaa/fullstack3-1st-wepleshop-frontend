import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ productId, imgUrl, productName }) => {
  return (
    <Link to="/detail" key={productId}>
      <div className="flowcard-wrapper">
        <div className="flowcard-img">
          <img src={imgUrl} alt={productName} width="230px" height="230px" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
