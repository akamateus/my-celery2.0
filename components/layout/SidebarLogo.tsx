import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { CeleryIcon } from "../svgs";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
    rounded-full
    h-16
    w-16
    p-4
    flex
    items-center
    justify-center
    transition duration-300 ease-in-out hover:scale-110
    hover:bg-slate-400
    hover:bg-opacity-10
    cursor-pointer
    transition"
    >
      <CeleryIcon size={28} color="green" />
    </div>
  );
};
export default SidebarLogo;
