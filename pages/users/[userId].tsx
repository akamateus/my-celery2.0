import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

import useUser from "@/hooks/useUser";

import Header from "@/components/Header";

import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";
import PostFeed from "@/components/posts/PostFeed";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <BeatLoader color="#22C55E" size={20} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserView;
