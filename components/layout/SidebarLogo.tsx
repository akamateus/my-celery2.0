import { useRouter } from "next/router";
import { CeleryIcon } from "../svgs";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
      rounded-md
    h-16
    w-16
    p-2
    flex
    items-center
    justify-center
    cursor-pointer
    transition duration-300 hover:scale-105
    hover:bg-stone-400
    hover:bg-opacity-10"
    >
      <CeleryIcon size={28} color="#22C55E" />
    </div>
  );
};
export default SidebarLogo;
