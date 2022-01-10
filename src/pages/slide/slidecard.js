import { Link } from 'react-router-dom';
import './slidecard.scss';

const SlideCard = ({ id, imgUrl, title, description }) => {
  return (
    <div className="slide-card-wrapper" key={id}>
      <Link to="/detail">
        <div className="card-img">
          <img src={imgUrl} alt={title} width="380px" height="280px" />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </Link>
    </div>
  );
};

export default SlideCard;
