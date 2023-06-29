import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Top from "./components/Top";

const notifications_list = [
  {
    id: 1,
    photoUrl: "./images/avatar-mark-webber.webp",
    type: "post-reaction",
    name: "Mark Webber",
    link: "My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    id: 2,
    photoUrl: "./images/avatar-angela-gray.webp",
    type: "following",
    name: "Angela Gray",
    link: "",
    time: "5m ago",
    read: false,
  },
  {
    id: 3,
    photoUrl: "./images/avatar-jacob-thompson.webp",
    type: "joining-a-group",
    name: "Jacob thompson",
    link: "Chess Club",
    time: "1 day ago",
    read: false,
  },
  {
    id: 4,
    photoUrl: "./images/avatar-rizky-hasanuddin.webp",
    type: "private-message",
    name: "Rizky Hasanuddin",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 day ago",
    read: true,
  },
  {
    id: 5,
    photoUrl: "./images/avatar-kimberly-smith.webp",
    type: "comment-on-picture",
    name: "Kimberly Smith",
    imageUrl: "./images/image-chess.webp",
    time: "1 week ago",
    read: true,
  },
  {
    id: 6,
    photoUrl: "./images/avatar-nathan-peterson.webp",
    type: "post-reaction",
    name: "Nathan Peterson",
    link: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
  },
  {
    id: 7,
    photoUrl: "./images/avatar-anna-kim.webp",
    type: "leaving-a-group",
    name: "Anna Kim",
    link: "Chess Club",
    time: "2 weeks ago",
    read: true,
  },
];

const App = () => {
  const [notifications, setNotifications] = useState([...notifications_list]);
  const [numUnreadNotifications, setNumUnreadNotifications] = useState(0);

  const markAsRead = () => {
    const newArray = [...notifications];
    newArray.forEach((notification) => {
      return (notification.read = true);
    });
    setNotifications([...newArray]);
  };

  useEffect(() => {
    const calcUnreadNotifications = () => {
      let number = 0;

      notifications.forEach((notifications) => {
        if (!notifications.read) number++;
      });

      setNumUnreadNotifications(number);
    };

    calcUnreadNotifications();
  }, [notifications]);

  return (
    <main className="px-5 md:bg-custom-white md:max-w-2xl md:mx-auto md:rounded-xl shadow-lg my-10">
      <Top
        numUnreadNotifications={numUnreadNotifications}
        markAsRead={markAsRead}
      />

      <Body notifications={notifications} />
    </main>
  );
};

export default App;
