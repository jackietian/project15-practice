import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import { changeUsername } from "../../state/form/form.action";

const Step1 = () => {
  // get username from redux form reducer
  const { username } = useSelector((state) => ({
    username: state.form.username,
  }));
  const navigate = useNavigate();
  const goPrev = () => {};

  const goNext = () => {
    navigate("step2");
  };

  const dispatch = useDispatch();

  const handleChangeUsername = (e) => {
    dispatch(changeUsername(e.target.value));
  };

  return (
    <>
      <h1>Step1</h1>
      <section>
        <label>username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </section>
      <FormButton goPrev={goPrev} goNext={goNext} />
    </>
  );
};

export default Step1;
