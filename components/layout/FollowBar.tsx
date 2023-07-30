const FollowBar = () => {
  return (
    // for pc
    <div
      className="
  px-6 py-4 hidden lg:block
  "
    >
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">New On Celery </h2>
      </div>
      <div className="flex flex-col gap-6 mt-4">{/* todo user list */}</div>
    </div>
  );
};

export default FollowBar;
