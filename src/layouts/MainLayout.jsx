import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {

    // const { isCartOpen, setIsCartOpen } = useCart();


  return (
    <div >
      <Navbar />
      <Outlet />
       <Footer />
    </div>
  )
}

export default MainLayout;
