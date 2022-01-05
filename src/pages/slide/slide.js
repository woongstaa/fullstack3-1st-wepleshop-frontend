import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SlideCard from '../../components/slidecard';
import './slide.scss';

export default function Slide() {
  //카드 정보
  const [slideInfo, setSlideInfo] = useState(1);

  //슬라이드 이동 x축
  const [x, setX] = useState(0);

  //카드 매핑 인덱스
  const [index, setIndex] = useState(0);

  //카드에담기는 정보
  // const [id, setId] = useState('');
  // const [imgUrl, setImgUrl] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/products/slide`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setSlideInfo(data));
  }, []);

  useEffect(() => {
    if (index === imgList.length - 1) {
      setImgList(prevList => [
        ...prevList,
        imgList[index - (originalSize - 1)],
      ]);

      return;
    }
    if (index === 0) {
      setImgList(prevList => [imgList[3], ...prevList]);
      setIndex(1);
    }
  }, [index]);

  const goLeft = () => {
    setX(x => x + 100);
    setIndex(prevIndex => prevIndex - 1);
  };
  const goRight = () => {
    setX(x => x - 100);
    setIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="slide-section">
      <div className="slide-showbox">
        <ul className="slide-wrapper">
          <li className="slide-list">
            {slideInfo.productSlide &&
              slideInfo.productSlide.map((e, i) => {
                return (
                  <SlideCard
                    key={i}
                    imgUrl={e.img_url}
                    title={e.title}
                    description={e.description}
                  />
                );
              })}
          </li>
        </ul>
      </div>
      <div className="slide-controller">
        <button type="button" className="prev" onClick={goLeft}>
          &lang;
        </button>
        <button type="button" className="next" onClick={goRight}>
          &rang;
        </button>
      </div>
    </div>
  );
}
