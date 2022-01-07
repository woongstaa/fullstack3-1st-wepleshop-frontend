import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import TopDetail from '../../components/top/TopDetail';
import ProductList from './ProductList';

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
