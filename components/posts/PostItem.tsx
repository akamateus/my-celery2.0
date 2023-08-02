import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import Avatar from "../Avatar";
import { BiCommentDetail, BiHeart } from "react-icons/bi";

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();
      loginModal.onOpen();
    },
    [loginModal]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div
      onClick={goToPost}
      className="
  p-5
  cursor-pointer
  hover:bg-stone-700
  transition
  rounded-xl
  my-4
  bg-stone-800

  
  "
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className=" flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className=" text-white font-semibold cursor-pointer hover:opacity-90"
            >
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="text-stone-500 cursor-pointer hover:text-green-500 transition hidden md:block"
            >
              @{data.user.username}
            </span>
            <span className="text-stone-500 text-xs">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
          <div className=" flex flex-row items-center mt-3 gap-10 ">
            <div
              className="
            flex 
            flex-row
            items-center
            text-stone-500
            gap-2
            cursor-pointer
            transition
            hover:text-green-500
            "
            >
              <BiCommentDetail size={20} />
              <p className="text-xs">{data.comments?.length || 0}</p>
            </div>

            <div
              onClick={onLike}
              className="
            flex 
            flex-row
            items-center
            text-stone-500
            gap-2
            cursor-pointer
            transition
            hover:text-red-500
            "
            >
              <BiHeart size={20} />
              <p className="text-xs">{data.comments?.length || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
