import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <header>Our App</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
