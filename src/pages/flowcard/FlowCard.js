import { useEffect, useState } from 'react/cjs/react.development';
import { GET_FLOW_API } from '../../config';
import './flowcard.scss';
import Card from './card';

export default function FlowCard() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(GET_FLOW_API, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setData(data.flowlist));
  }, []);

  return (
    <div className="flowcard-wrapper">
      <section className="product-card-container">
        <div className="product-card">
          <div className="product-flowcard-toplist">
            {data &&
              data.map((e, i) => {
                return (
                  <Card key={i} imgUrl={e.imgUrl} productName={e.productName} />
                );
              })}
          </div>
          <div className="product-flowcard-bottomlist">
            {data &&
              data.map((e, i) => {
                return <Card key={i} imgUrl={e.imgUrl} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
