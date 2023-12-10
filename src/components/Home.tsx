import NavBar from "../common/NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
