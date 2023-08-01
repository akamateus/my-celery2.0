import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

import useUser from "@/hooks/useUser";

import Header from "@/components/Header";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <BeatLoader color="green" size={20} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
    </>
  );
};

export default UserView;
