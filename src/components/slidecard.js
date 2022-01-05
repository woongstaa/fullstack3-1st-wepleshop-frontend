import { Link } from 'react-router-dom';
import './slidecard.scss';

const SlideCard = ({ i, imgUrl, title, description }) => {
  return (
    <div className="slide-card-wrapper" key={i}>
      <Link to="/detail">
        <div className="card-img">
          <img src={imgUrl} alt={title} width="450px" height="280px" />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </Link>
    </div>
  );
};

export default SlideCard;
