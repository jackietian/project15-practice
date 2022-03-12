const initialState = {
  username: "",
  city: "",
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_CHANGE_USERNAME":
      return {
        ...state,
        username: action.data,
      };
    default:
      return state;
  }
};

export default FormReducer;
