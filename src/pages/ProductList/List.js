import ProductList from './ProductList';
import TopDetail from '../../components/top/TopDetail';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

const List = () => {
  return (
    <div>
      <TopDetail />
      <Nav />
      <ProductList />
      <Footer />
    </div>
  );
};

export default List;
