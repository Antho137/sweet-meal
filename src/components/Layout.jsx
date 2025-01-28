import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" bg-gradient-to-r from-orange-300 to-green-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
