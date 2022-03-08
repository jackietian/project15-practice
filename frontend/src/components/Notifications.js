import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../state/notifications/notificaiton.actions";

const Notifications = () => {
  const { notifications } = useSelector((state) => {
    return {
      notifications: state.notifications.notifications,
    };
  });
  return (
    <ul className="list--notificaitons">
      {notifications.map((item, index) => (
        <li key={index}>
          <Notification message={item} />
        </li>
      ))}
    </ul>
  );
};

const Notification = ({ message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      // remove notification
      dispatch(removeNotification());
    }, 2000);
  }, []);
  return <>{message}</>;
};

export default Notifications;
