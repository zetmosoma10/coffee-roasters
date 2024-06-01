import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="relative">
      <div className="max-container">
        <NavBar />
      </div>
      <Outlet />
      <div className="max-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
