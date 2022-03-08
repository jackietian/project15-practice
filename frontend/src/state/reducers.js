import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import notificationReducer from "./notifications/notification.reducer";

export default combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
});
