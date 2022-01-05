import './side.scss';

export default function Aside() {
  return (
    <div className="aside-wrapper">
      <div className="aside-menu">
        <ul className="aside-top">
          <li className="aside-top-menu">쇼핑</li>
          <li className="aside-top-menu">실시간</li>
          <li className="aside-top-menu">리뷰</li>
          <li className="aside-top-menu">검색</li>
          <li className="aside-top-menu">마이페이지</li>
        </ul>
      </div>
    </div>
  );
}
