const FormButton = ({ goPrev, goNext }) => {
  return (
    <section>
      <button onClick={goPrev}>prev</button>
      <button onClick={goNext}>next</button>
    </section>
  );
};

export default FormButton;
