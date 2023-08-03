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
        <BeatLoader color="#22C55E" size={10} />
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
  px-4 hidden lg:block
  "
      //py-4
    >
      <div className="bg-stone-800 rounded-b-md p-4">
        <h2 className="text-white text-xl text-center font-semibold">
          New On{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            Celery{" "}
          </span>
          🎉
        </h2>
        <div className="flex flex-col items-left gap-4 mt-4   rounded-md">
          {" "}
          {users.map((user: Record<string, any>) => (
            <div
              key={user.id}
              className="
        flex flex-row gap-4 bg-stone-700 rounded-md p-2
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
