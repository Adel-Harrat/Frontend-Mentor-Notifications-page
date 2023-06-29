import Notification from "./Notification";

const Body = ({ notifications }) => {
  return notifications.map((notification) => (
    <Notification key={notification.id} notification={notification} />
  ));
};

export default Body;
