import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SlideCard from '../../components/slidecard';

export default function Slide() {
  const [slideInfo, setSlideInfo] = useState();
  const [x, setX] = useState(0);
  const [index, setIndex] = useState(0);
  const [id, setId] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(
      `http://localhost:8000/slides/slide?${id}${imgUrl}${title}${description}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json', mode: 'cors' },
      }
    )
      .then(res => res.json())
      .then(data => setSlideInfo(data));
  }, []);
  console.log(slideInfo);

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
        <div className="slide-container">
          <ul className="slide-wrapper">
            <li className="slide-list">
              {slideInfo &&
                slideInfo.slide.map((e, i) => {
                  return;
                  <SlideCard
                    key={i}
                    imgUrl={e.imgUrl}
                    title={e.title}
                    description={e.description}
                  />;
                })}
            </li>
          </ul>
          <div className="slide-controller">
            <button type="button" className="prev" onClick={goLeft}>
              &lang;
            </button>
            <button type="button" className="next" onClick={goRight}>
              &rang;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
