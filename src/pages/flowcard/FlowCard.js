import { useEffect, useState } from 'react/cjs/react.development';
import './flowcard.scss';
import Card from './card';

export default function FlowCard() {
  const [data, setData] = useState();
  // let productImgUrl = [];
  // const [imgUrl, urlSetting] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/products/flow`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => setData(data.flowlist));
    // for (let i = 0; i < Object.values(data).length; i++) {
    //   if (productImgUrl.indexOf(Object.values(data[i])[7]) === -1) {
    //     productImgUrl.push(Object.values(data[i])[7]);
    //   }
    // }
    // let img = [...productImgUrl];
    // urlSetting(img);
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
