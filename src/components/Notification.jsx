const Notification = ({ notification }) => {
  const { photoUrl, type, name, link, time, read, message, imageUrl } =
    notification;

  const renderTextBasedOnType = (type) => {
    switch (type) {
      case "post-reaction":
        return "reacted to your recent post";
      case "following":
        return "followed you";
      case "joining-a-group":
        return "has joined your group";
      case "private-message":
        return "sent you a private message";
      case "comment-on-picture":
        return "commented on your picture";
      case "leaving-a-group":
        return "left the group";
      default:
        return "";
    }
  };

  return (
    <article
      className={`mb-3 flex items-start justify-between gap-3 py-3 px-3 rounded-md ${
        !read && "bg-custom-very-light-grayish-blue"
      }`}
    >
      <img src={photoUrl} alt="" className="h-10 w-h-10" />

      <div className="text-sm text-custom-dark-grayish-blue flex-1">
        <div>
          {/* Name */}
          <strong className="text-custom-very-dark-blue hover:text-custom-blue my-transition cursor-pointer">
            {name}
          </strong>{" "}
          {/* Text */}
          {renderTextBasedOnType(type)} {/* Link */}
          <strong
            className={`${
              type === "post-reaction" ? "" : "text-custom-blue"
            } hover:text-custom-blue my-transition cursor-pointer`}
          >
            {link}
          </strong>
          {/* Red dot */}
          {!read && (
            <div className="h-2 w-2 inline-block ml-1 bg-custom-red rounded-full" />
          )}
        </div>
        <span className="text-custom-grayish-blue">{time}</span>

        {type === "private-message" && (
          <div className="border-solid border-[1px] border-custom-light-grayish-blue-1 p-3 mt-3 rounded-md hover:bg-custom-light-grayish-blue-2 cursor-pointer hover:border-custom-light-grayish-blue-2 my-transition">
            {message}
          </div>
        )}
      </div>

      {type === "comment-on-picture" && (
        <div className="h-14 w-14 flex items-center justify-center hover:bg-custom-light-grayish-blue-1 rounded-lg my-transition">
          <img
            src={imageUrl}
            alt="image"
            className="w-12 h-12 hover:outline-2 hover:outline-offset-1 hover:outline-blue-700 cursor-pointer"
          />
        </div>
      )}
    </article>
  );
};

export default Notification;
