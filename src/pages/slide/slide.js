import React, { useEffect, useState } from 'react';
import SlideCard from './slidecard';
import './slide.scss';

export default function Slide() {
  const [slideInfo, setSlideInfo] = useState([]);

  const [x, setX] = useState(0);
  const [moving, setMoving] = useState(false);
  const [index, setIndex] = useState(1);
  const [originalSize, setOriginalSize] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/products/slide`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setSlideInfo(data));
  }, []);

  // useEffect(() => {
  //   //인덱스가 마지막 사진에 도달하면
  //   if (index === slideInfo.length - 1) {
  //     setImgList(prevList => [
  //       ...prevList,
  //       slideInfo[index - (originalSize - 1)],
  //     ]);

  //     return;
  //   }
  //   if (index === 0) {
  //     setImgList(prevList => [slideInfo[3], ...prevList]);
  //     setIndex(1);
  //   }
  // }, [index]);

  // const goLeft = () => {
  //   if (moving) return; // 움직이는 중이라면 버튼 액션을 비활성화합니다.
  //   setX((<변경>) => <변경>);
  //   setMoving(true);
  //   setTimeout(() => {
  //     const lastImg = imgList.pop();
  //     setImgList(<변경>);
  //     setX((<변경>) => <변경>);
  //     setMoving(false);
  //   }, 500);
  // };

  // const goRight= () => {
  //   if (moving) return; // 움직이는 중이라면 버튼 액션을 비활성화합니다.
  //   setX((<변경>) => <변경>);
  //   setMoving(true);
  //   setTimeout(() => {
  //     const firstImg = imgList.shift();
  //     setImgList(<변경>);
  //     setX((<변경>) => <변경>);
  //     setMoving(false);
  //   }, 500);
  // };

  useEffect(() => {
    if (index === slideInfo.length - 1) {
      setSlideInfo(prevList => [
        ...prevList,
        slideInfo[index - (originalSize - 1)],
      ]);

      return;
    }
    if (index === 0) {
      setSlideInfo(prevList => [slideInfo[4], ...prevList]);
      setIndex(1);
    }
  }, [index]);

  const goLeft = () => {
    setX(x => x + 423);
    setIndex(prevIndex => prevIndex - 1);
  };
  const goRight = () => {
    setX(x => x - 423);
    setIndex(prevIndex => prevIndex + 1);

    // if (slideInfo === slideInfo.length - 1) {}
  };

  return (
    <div className="slide-section">
      <div className="slide-showbox">
        <ul
          className="slide-wrapper"
          style={{ transform: `translateX(${x}px)` }}
        >
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
