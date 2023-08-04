import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);
  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    // ${hasBorder ? "border-4 border-green-900" : ""}
    <div
      className={`
    ${isLarge ? "h-32" : "h-12"}
    ${isLarge ? "w-32" : "w-12"}
    rounded-full 
    hover:opacity-90 
    transition 
    cursor-pointer
    relative
    border border-green-500
    `}
    >
      <Image
        priority
        fill
        sizes="100px"
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || `/images/celeryAvatar.png`}
      />
    </div>
  );
};

export default Avatar;
