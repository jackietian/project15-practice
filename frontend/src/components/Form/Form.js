import { Outlet } from "react-router-dom";

const Form = () => {
  return (
    <>
      <h1>Form</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Outlet />
      </form>
    </>
  );
};

export default Form;
