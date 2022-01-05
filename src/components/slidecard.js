import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import './slidecard.scss';

const SlideCard = ({ i, id, imgUrl, title, description }) => {
  return (
    <div className="slide-card-wrapper" key={i}>
      <div className="card-img">
        <Link to="/detail">
          <img src={imgUrl} />
        </Link>
      </div>

      <div className="card-title">
        <Link to="/detail">{title}</Link>
      </div>

      <div className="card-description">
        <Link to="/detail">{description}</Link>
      </div>
    </div>
  );
};

export default SlideCard;
