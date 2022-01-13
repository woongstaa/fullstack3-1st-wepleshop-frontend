import './Section.scss';
import Top from '../top/Top';
import Footer from '../footer/Footer';
import Slide from '../../pages/slide/slide';
import ProductList from '../../pages/ProductList/ProductList';
import FlowCard from '../../pages/flowcard/FlowCard';

function Section() {
  return (
    <div className="sectionContainer">
      <Top />
      <div className="mainWrapper">
        <Slide />
        <FlowCard />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Section;
