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
      label: "Home",
      href: "/",
      icon: PiHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: AiFillNotification,
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: PiUserFill,
      auth: true,
    },
  ];
  return (
    <div className=" col-span-1 h-full pr-4 md:pr-4">
      <div className=" flex flex-col items-end ">
        <div
          className=" space-y-5 lg:w-[230px] bg-stone-800  rounded-b-md p-4 items-center
    justify-center"
        >
          <div
            className="flex cursor-pointer justify-center rounded-md transition duration-300 hover:scale-105
    hover:bg-stone-400
    hover:bg-opacity-10"
          >
            <SidebarLogo />
          </div>
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
              alert={item.alert}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiSolidLogOut}
              label="Logout"
            />
          )}
          <SidebarPostButton />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
