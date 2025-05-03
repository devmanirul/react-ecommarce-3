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
      {/* footer */}
      <Footer />
      {/* Blogs */}
      <Blogs />
    </div>
  );
};
export default Blog;
