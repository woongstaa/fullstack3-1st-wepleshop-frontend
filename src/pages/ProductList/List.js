import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
// import TopDetail from '../../components/top/TopDetail';
import Top from '../../components/top/Top';
import ProductList from './ProductList';
import './List.scss';
const List = () => {
  return (
    <div className="ListContainer">
      <Top />
      <Nav />
      <ProductList />
      <Footer />
    </div>
  );
};

export default List;
