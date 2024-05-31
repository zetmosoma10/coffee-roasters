import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <div className="max-container">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
