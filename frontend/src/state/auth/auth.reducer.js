const initialState = {
  loading: false,
  currentUser: {},
  token: "",
  login: {
    email: "foo@gmail.com",
    password: "123",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return {
        ...state,
        login: {
          ...state.login,
          ...action.data,
        },
      };
    case "LOGIN_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        currentUser: action.data.result,
        token: action.data.token,
      };
    default:
      return state;
  }
};

export default authReducer;
