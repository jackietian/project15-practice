import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getToken, clearSessionStorage } from "../services/SessionStorage";

const ProtectedLayout = () => {
  // check whether user has logged in

  // if user has already logged in, then go ahead

  // if not, navigate to login

  const navigate = useNavigate();

  useEffect(() => {
    // get token from sessionStorage
    const token = getToken();
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, []);

  const logout = () => {
    clearSessionStorage();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <header>
        <h1>header</h1>
        <nav>
          <li>
            <NavLink to="/home">home</NavLink>
          </li>
          <li onClick={logout}>Logout</li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
