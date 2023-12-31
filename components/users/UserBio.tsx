import { format } from "date-fns";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";
import useEditModal from "@/hooks/useEditModal";
import Button from "../Button";
import { TbCalendarCheck } from "react-icons/tb";
import useFollow from "@/hooks/useFollow";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }
    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div
      className="
   border-stone-600 pb-4 border  rounded-md mt-4 
  "
    >
      <div
        className="
        flex justify-end pt-2 pb-2 bg-stone-800 rounded-t-md
    "
      >
        <div className="mr-2">
          {currentUser?.id === userId ? (
            <Button secondary label="Edit" onClick={editModal.onOpen} />
          ) : (
            <Button
              onClick={toggleFollow}
              label={isFollowing ? "Connected" : "Connect"}
              outline={!isFollowing}
              secondary={isFollowing}
            />
          )}
        </div>
      </div>
      <div className="mt-5 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p
            className="
          text-md text-stone-500
          "
          >
            @{fetchedUser?.username}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{fetchedUser?.bio}</p>
          <div
            className="
          flex
          flex-row
          items-center
          gap-2
          mt-2
          text-stone-500"
          >
            <TbCalendarCheck color="#22C55E" size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.followingIds?.length}</p>
            <p className="text-stone-500"> Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.followersCount || 0}</p>
            <p className="text-stone-500"> Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
