import React from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      {/* phone */}
      <div
        className="
    relative
    rounded-lg
    h-14
    w-14
    flex
    items-center
    justify-center
    p-4
    hover:bg-slate-400
    transition duration-300 ease-in-out hover:scale-110
    hover:bg-opacity-10
    cursor-pointer
    lg:hidden
    "
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className="
      relative
      hidden
      lg:flex
      items-center
      gap-4
      p-4
      rounded-lg
      hover:bg-slate-300
      hover:bg-opacity-10
      cursor-pointer
      "
      >
        <Icon size={24} color="white" />
        <p className=" hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
