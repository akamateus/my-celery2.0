import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import Avatar from "../Avatar";
import {
  BiCommentDetail,
  BiHeart,
  BiSolidHeart,
  BiShareAlt,
} from "react-icons/bi";
import useLike from "@/hooks/useLike";

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId });

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

      if (!currentUser) {
        loginModal.onOpen();
      }

      toggleLike();
    },
    [loginModal, currentUser, toggleLike]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  const LikeIcon = hasLiked ? BiSolidHeart : BiHeart;

  return (
    <div
      onClick={goToPost}
      className="
  p-5
  cursor-pointer
  hover:bg-stone-700
  transition
  rounded-md
  my-4
  bg-stone-800

  
  "
    >
      <div className="flex flex-row items-start gap-4">
        <div>
          <div className=" flex flex-row items-center gap-2">
            <Avatar userId={data.user.id} />
            <p
              onClick={goToUser}
              className=" text-white font-semibold cursor-pointer"
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
          <div className="text-white mt-4 break-all">{data.body}</div>
          <div className=" flex flex-row items-center mt-3 gap-10 ">
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
              <LikeIcon size={20} color={hasLiked ? "#EF4444" : ""} />
              <p className="text-xs">{data.likeIds.length}</p>
            </div>
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
              <BiShareAlt size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
