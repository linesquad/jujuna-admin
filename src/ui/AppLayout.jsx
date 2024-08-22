import { Outlet } from "react-router-dom";
import Header from "./Header";
import Wrapper from "../components/Wrapper";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <div className="bg-[#eaeaea]">
      <Header />
      <Wrapper>
        <div className="mt-[30px] flex gap-[40px]">
          <Sidebar />
          <Outlet />
        </div>
      </Wrapper>
    </div>
  );
}

export default AdminLayout;
