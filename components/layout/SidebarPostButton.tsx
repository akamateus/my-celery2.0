import { useRouter } from "next/router";
import { useCallback } from "react";
import { PiPencilSimpleLineFill } from "react-icons/pi";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarPostButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    router.push("/");
  }, [loginModal, router, currentUser]);

  return (
    // phone
    <div onClick={onClick}>
      <div
        className="
    
    lg:hidden
    rounded-md
    h-14
    w-14
    p-4
    flex
    items-center
    justify-center
    bg-green-500
    hover:bg-opacity-80
    transition
    cursor-pointer
    m-1
    "
      >
        <PiPencilSimpleLineFill size={24} color="white" />
      </div>
      {/* pc */}
      <div
        className="
      mt-6
      hidden
      lg:block
      px-4
      py-2
      rounded-md
      bg-green-500
      hover:bg-opacity-90
      cursor-pointer
      transition
      "
      >
        <p
          className="
        hidden
        lg:block
        text-center
        font-semibold
        text-white
        text-[20px]
        "
        >
          Post
        </p>
      </div>
    </div>
  );
};

export default SidebarPostButton;
