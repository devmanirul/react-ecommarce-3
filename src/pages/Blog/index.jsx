import Blogs from "../../components/Blogs";
import Banner from "../../components/CommonComponent/Banner";
import Footer from "../../components/CommonComponent/Footer";
import Navbar from "../../components/CommonComponent/Navbar";

const Blog = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Blogs */}
      <Blogs />
      {/* footer */}
      <Footer />
    </div>
  );
};
export default Blog;
