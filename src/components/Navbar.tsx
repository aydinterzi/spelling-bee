import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import HowToPlay from "./HowToPlay";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 top-0 left-0 w-full border-b bg-yellow-300">
      <MaxWidthWrapper>
        <div className="flex h-14 justify-between items-center">
          <Link href="/" className="font-semibold z-40 text-xl text-black ">
            spelling <span className="bg-yellow-300">bee</span>
          </Link>
          <div className="flex items-center gap-8">
            <HowToPlay />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
