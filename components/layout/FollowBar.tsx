import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";
import { BeatLoader } from "react-spinners";

const FollowBar = () => {
  const { data: users = [], isLoading } = useUsers();

  //or h-full if have problems with the layout
  //added isLoading like in userId
  if (isLoading || !users) {
    return (
      <div className="flex justify-center items-center h-40">
        <BeatLoader color="green" size={10} />
      </div>
    );
  }

  if (users.length === 0) {
    return null;
  }
  // for pc
  return (
    <div
      className="
  px-6 py-4 hidden lg:block
  "
    >
      <div className="bg-stone-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">New On Celery </h2>
        <div className="flex flex-col items-center gap-6 mt-4 bg-stone-700 pt-3 pb-3 rounded-md">
          {" "}
          {users.map((user: Record<string, any>) => (
            <div
              key={user.id}
              className="
        flex flex-row gap-4
        "
            >
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className=" text-white font-semibold text-sm">{user.name}</p>
                <p
                  className="
                text-green-500 text-sm
                "
                >
                  @{user.username}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
