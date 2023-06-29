const Top = ({ markAsRead, numUnreadNotifications }) => {
  const handleClick = () => {
    markAsRead();
  };
  return (
    <section className="flex items-center justify-between mt-5 mb-5 md:pt-5">
      <div className="flex items-center justify-between space-x-2">
        <h1 className="text-xl font-bold text-custom-very-dark-blue">
          Notifications
        </h1>
        <span className="bg-custom-blue text-white font-bold px-2 rounded-md">
          {numUnreadNotifications}
        </span>
      </div>
      <button
        onClick={handleClick}
        className="text-custom-grayish-blue text-xs hover:text-custom-blue my-transition"
      >
        Mark all as read
      </button>
    </section>
  );
};

export default Top;
