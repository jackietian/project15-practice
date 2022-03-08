import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
