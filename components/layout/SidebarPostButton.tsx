import { useRouter } from "next/router";
import { PiPencilSimpleLineFill } from "react-icons/pi";

const SidebarPostButton = () => {
  const router = useRouter();
  return (
    // For Pc screens
    <div onClick={() => router.push("/")}>
      <div
        className="
    mt-6
    lg:hidden
    rounded-full
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
    "
      >
        <PiPencilSimpleLineFill size={24} color="white" />
      </div>
      {/* For phone */}
      <div
        className="
      mt-6
      hidden
      lg:block
      px-4
      py-2
      rounded-full
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
