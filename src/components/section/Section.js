import './Section.scss';
import Top from '../top/Top';
import Footer from '../footer/Footer';
import Slide from '../../pages/slide/slide';
import ProductList from '../../pages/ProductList/ProductList';

function Section() {
  return (
    <div className="sectionContainer">
      <Top />
      <div className="mainWrapper">
        <Slide />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Section;
