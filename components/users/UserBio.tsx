import { format } from "date-fns";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";
import useEditModal from "@/hooks/useEditModal";
import Button from "../Button";
import { GiFruitBowl } from "react-icons/gi";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }
    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div
      className="
  border-b-[1px] border-stone-800 pb-4
  "
    >
      <div
        className="
        flex justify-end pt-3
    "
      >
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={editModal.onOpen} />
        ) : (
          <Button onClick={() => {}} label="Connect" secondary />
        )}
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
            <GiFruitBowl color="#22C55E" size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.followingIds?.length}</p>
            <p className="text-stone-500"> Connections</p>
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
