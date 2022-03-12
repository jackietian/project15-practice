import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";

const Step2 = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate("/form");
  };

  const goNext = () => {};
  return (
    <>
      <h1>Step2</h1>
      <section>
        <label>city</label>
        <input type="text" name="city" id="city" />
      </section>
      <FormButton goPrev={goPrev} goNext={goNext} />
    </>
  );
};

export default Step2;
