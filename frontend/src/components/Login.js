import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleChangeLogin,
  handleLoginAction,
} from "../state/auth/auth.actions";

const Login = () => {
  const { email, password, loading } = useSelector((state) => {
    const { email, password, loading } = state.auth.login;
    return {
      email,
      password,
      loading,
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    dispatch(handleChangeLogin(e.target.name, e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(handleLoginAction({ email, password }));
    // if success ,then go to home page
    if (result.type === "LOGIN_SUCCESS") {
      navigate("/home");
    }
  };

  //   useEffect(() => {
  //     if(token !== '') {
  //         navigate('/home')
  //     }

  //   }, [token])

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label>email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </section>
      <section>
        <label>password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </section>
      <section>
        <button type="reset">Cancel</button>
        <button type="submit" disabled={loading}>
          Login
        </button>
      </section>
    </form>
  );
};

export default Login;
