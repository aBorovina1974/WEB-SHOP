import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Paging from "../components/Paging/Paging";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Paging /> */}
    </>
  );
};

export default RootLayout;
