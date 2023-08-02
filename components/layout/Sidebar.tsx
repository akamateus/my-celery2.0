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
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: PiUserFill,
      auth: true,
    },
  ];
  return (
    <div className=" pt-6 col-span-1 h-full pr-4 md:pr-6">
      <div className=" flex flex-col items-end">
        <div className=" space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
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
