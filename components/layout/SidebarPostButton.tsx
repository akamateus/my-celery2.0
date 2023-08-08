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

    items-center
    justify-center
    bg-green-500
    hover:bg-opacity-80
    transition
    cursor-pointer
    m-2
    "
      >
        <PiPencilSimpleLineFill size={24} color="white" />
      </div>
      {/* pc */}
      <div
        className="
      rounded-md

    flex
    items-center
    justify-center
    transition duration-300
    cursor-pointer
    "
      >
        <div
          className="
        relative
        hidden
        lg:flex
        justify-center
        items-center
        bg-green-500
        p-4
        rounded-md
        cursor-pointer
        transition duration-300 ease-in-out hover:scale-110
      "
        >
          <PiPencilSimpleLineFill size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default SidebarPostButton;
