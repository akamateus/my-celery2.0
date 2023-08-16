import { AiFillNotification } from "react-icons/ai";
import { PiHouseFill, PiUserFill } from "react-icons/pi";
import { BiSolidLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarPostButton from "./SidebarPostButton";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      href: "/",
      icon: PiHouseFill,
    },
    {
      href: "/notifications",
      icon: AiFillNotification,
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      href: `/users/${currentUser?.id}`,
      icon: PiUserFill,
      auth: true,
    },
  ];
  return (
    <div className=" z-40 px-4 lg:block">
      <div>
        <div
          className=" space-y-5 lg:w-[100px] bg-stone-800  rounded-b-md p-4 items-center
    justify-center"
        >
          <div className="flex cursor-pointer justify-center rounded-md ">
            <SidebarLogo />
          </div>
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              auth={item.auth}
              alert={item.alert}
            />
          ))}
          {currentUser && (
            <SidebarItem onClick={() => signOut()} icon={BiSolidLogOut} />
          )}
          <div className="flex cursor-pointer justify-center rounded-md ">
            <SidebarPostButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
