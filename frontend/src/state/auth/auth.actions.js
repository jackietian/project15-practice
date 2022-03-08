import { login } from "../../api/login.api";

export const handleChangeLogin = (name, value) => {
  return {
    type: "CHANGE_LOGIN",
    data: {
      [name]: value,
    },
  };
};

export const handleLoginAction = (data) => (dispatch) => {
  dispatch(handleLoginActionRequest());
  return login(data)
    .then((res) => dispatch(handleLoginActionSuccess(res)))
    .catch((e) => dispatch(handleLoginActionError(e)));
};

const handleLoginActionRequest = () => ({
  type: "LOGIN_REQUESTED",
});

const handleLoginActionSuccess = (res) => {
  return {
    type: "LOGIN_SUCCESS",
    data: res.data,
  };
};

const handleLoginActionError = (e) => {
  return {
    type: "LOGIN_FAIL",
    e,
  };
};
