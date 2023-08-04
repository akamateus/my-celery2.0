import Form from "@/components/Form";
import Header from "@/components/Header";
import CommentFeed from "@/components/posts/CommentFeed";
import PostItem from "@/components/posts/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <BeatLoader color="#22C55E" size={10} />
      </div>
    );
  }

  return (
    <>
      <Header label="Post" showBackArrow />
      <PostItem data={fetchedPost} />
      <Form
        postId={postId as string}
        isComment
        placeholder="Reply, start a fight ☠️"
      />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
  );
};

export default PostView;
