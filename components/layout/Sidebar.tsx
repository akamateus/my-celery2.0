import { AiFillNotification } from "react-icons/ai";
import { PiHouseFill, PiUserFill } from "react-icons/pi";
import { BiSolidLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarPostButton from "./SidebarPostButton";

const Sidebar = () => {
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
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: PiUserFill,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiSolidLogOut} label="Logout" />
          <SidebarPostButton />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
