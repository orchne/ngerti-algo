import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar.component";

const AppLayout = () => {
  return (
    <div>
      {/* header */}
      <Navbar />

      {/* content */}
      <Outlet />

      {/* Footer */}
      <p>This is a Footer</p>
    </div>
  );
};

export default AppLayout;
