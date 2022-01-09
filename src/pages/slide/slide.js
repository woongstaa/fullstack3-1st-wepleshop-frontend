import React, { useEffect, useState } from 'react';
import SlideCard from './slidecard';
import './slide.scss';

export default function Slide() {
  const [slideInfo, setSlideInfo] = useState([]);
  const [x, setX] = useState(0);
  const [moving, setMoving] = useState(false);
  // const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8000/products/slide`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => {
        // const newJson = [...data.productSlide];
        const newJson = data;

        setSlideInfo(newJson);

        // setX(-(parseInt(newJson.productSlide.length / 2, 10) * 500));
      });
  }, []);

  // useEffect(() => {
  //   if (index === slideInfo.length - 1) {
  //     setSlideInfo(prevList => [
  //       ...prevList,
  //       slideInfo[index - (originalSize - 1)],
  //     ]);

  //     return;
  //   }
  //   if (index === 0) {
  //     setSlideInfo(prevList => [slideInfo[4], ...prevList]);
  //     setIndex(1);
  //   }
  // }, [index]);

  const goLeft = () => {
    //움직이는 중 버튼 비활성화
    if (moving) return;
    //translateX값 설정
    setX(x => x + 1);
    setMoving(true);
    //타이머가 완료된 뒤 함수 실행
    // setTimeout(() => {
    const popCard = slideInfo.productSlide.pop();
    const newProductSlide = [popCard].concat(slideInfo.productSlide);
    const newSlideInfo = slideInfo;
    newSlideInfo.productSlide = newProductSlide;
    // setSearches([query].concat(searches))
    setSlideInfo(newSlideInfo);
    // setSlideInfo([...slideInfo, popCard]); // slideInfo 배열
    // setX(x => x + 300);
    setMoving(false);
    // }, 500);
  };
  const goRight = () => {
    //움직이는 중 버튼 비활성화
    if (moving) return;
    setX(x => x - 1);
    setMoving(true);
    const popCard = slideInfo.productSlide.shift();
    //concat을 push(popCard)로 변경하고 70번 줄을 [...newProductSlide]로 변경
    const newProductSlide = slideInfo.productSlide.concat([popCard]);
    const newSlideInfo = slideInfo;
    newSlideInfo.productSlide = newProductSlide;
    setSlideInfo(newSlideInfo);
    // setX(x => x - 2);
    setMoving(false);

    //타이머가 완료된 뒤 함수 실행
    // setTimeout(() => {
    //   const lastImg = slideInfo.shift();
    //   setSlideInfo([0]);
    //   setX(x => x + 423);
    //   setMoving(false);
    // }, 500);
  };

  return (
    <div className="slide-section">
      <div className="slide-showbox">
        <ul className="slide-wrapper">
          <li className="slide-list">
            {slideInfo.productSlide &&
              slideInfo.productSlide.map((imgData, idx) => {
                return (
                  <SlideCard
                    style={{ transform: `translateX(${x}px)` }}
                    key={`${imgData.id}`}
                    imgUrl={imgData.img_url}
                    title={imgData.title}
                    description={imgData.description}
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
