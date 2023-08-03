import { useCallback, useState } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import { toast } from "react-hot-toast";
import axios from "axios";
import Button from "./Button";
import Avatar from "./Avatar";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}
const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/posts", { body });

      toast.success("Post created");

      setBody("");

      mutatePosts();
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts]);

  return (
    <div
      className="
  border-b-[1px] border-t-[1px] border-stone-700 px-6 "
    >
      {currentUser ? (
        <div className="flex flex-row gap-4 bg-stone-800 rounded-md pt-4 pl-4 my-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="
              disabled:opacity-80
              peer
              resize-none
              mt-1
              mb-2
              w-full
              bg-stone-800
              ring-0
              outline-none
              text-[16px]
              placeholder-stone-500
              text-white
              "
              placeholder={placeholder}
            ></textarea>
            <hr
              className="
            opacity-0
            peer-focus:opacity-100
            h-[1px]
            w-full
            border-green-800
            transition
            "
            />
          </div>
          <div
            className="
            mt-1 flex flex-row justify-center pr-4
            "
          >
            <Button
              label="Post"
              disabled={isLoading || !body}
              onClick={onSubmit}
            />
          </div>
        </div>
      ) : (
        <div className=" py-8">
          <h1
            className="
        text-white
        text-2x1
        text-center
        mb-4
        font-bold
        "
          >
            Missing catching up with your{" "}
            <span className="underline underline-offset-3 decoration-4 decoration-green-400 dark:decoration-green-600">
              {" "}
              Celery Friends?{" "}
            </span>
          </h1>
          <div className="flex flex-row items-center justify-center gap-4  ">
            <Button label="Login" onClick={loginModal.onOpen} />
            <h1 className="text-white text-2x1">or</h1>
            <Button label="Register" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
