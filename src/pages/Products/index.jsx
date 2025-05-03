import Footer from "../../components/CommonComponent/Footer";
import Header from "../../components/CommonComponent/Header";
import Navbar from "../../components/CommonComponent/Navbar";
import Product from "../../components/Products/Product";

const Products = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* footer */}
      <Footer />

      {/* Products */}
      <Product />
    </div>
  );
};
export default Products;
