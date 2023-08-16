import { useRouter } from "next/router";
import { useCallback } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}
const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="bg-stone-800 p-4 rounded-b-md mb-4 ">
      <div className="flex flex-row items-center justify-center space-x-4 ">
        {showBackArrow && (
          <MdArrowBackIosNew
            onClick={handleBack}
            color="white"
            size={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1
          className="text-white
        text-xl font-semibold"
        >
          {label}
        </h1>
      </div>
    </div>
  );
};
export default Header;
