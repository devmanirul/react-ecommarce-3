import Footer from "../../components/CommonComponent/Footer";
import Header from "../../components/CommonComponent/Header";
import Navbar from "../../components/CommonComponent/Navbar";
import ProductList from "../../components/CommonComponent/ProductList";

const Products = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* Products */}
      <ProductList />
      {/* footer */}
      <Footer />
    </div>
  );
};
export default Products;
