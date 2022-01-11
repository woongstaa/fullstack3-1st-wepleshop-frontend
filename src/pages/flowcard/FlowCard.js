import { useEffect, useState } from 'react/cjs/react.development';
import './FlowCard.scss';
import Card from './card';

export default function FlowCard() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/products/list`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setData(data.list));
  }, []);
  console.log(data);

  return (
    <div className="flowcard-wrapper">
      <section className="product-card-container">
        <div className="product-card">
          <div className="product-flowcard-toplist">
            {data &&
              data.map((e, i) => {
                return <Card key={i} img={e.imgUrl} name={e.productName} />;
              })}
          </div>
          <div className="product-flowcard-bottomlist">
            {data &&
              data.map((e, i) => {
                return <Card key={i} img={e.imgUrl} name={e.productName} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
