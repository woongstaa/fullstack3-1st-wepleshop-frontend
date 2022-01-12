/* eslint-disable no-unreachable */
import { useEffect, useState } from 'react/cjs/react.development';
import './flowcard.scss';
import Card from './Card';

export default function FlowCard() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/products/list`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="flowcard-wrapper">
      <section className="product-card-container">
        <div className="product-card">
          <div className="product-flowcard-toplist">
            {data &&
              data.list.map((e, i) => {
                return <Card key={i} imgUrl={e.imgUrl} />;
              })}
          </div>
          <div className="product-flowcard-bottomlist">
            {data &&
              data.list.map((e, i) => {
                return <Card key={i} imgUrl={e.imgUrl} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
