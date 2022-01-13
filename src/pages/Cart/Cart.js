import CartTop from './CartTop';
import CartBody from './CartBody';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const Cart = () => {
  return (
    <div className="Cart">
      <CartTop />
      <CartBody />
      <Nav />
      <Footer />
    </div>
  );
};

export default Cart;
