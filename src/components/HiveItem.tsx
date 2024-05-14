"use client";

import { cn } from "@/lib/utils";

const HiveItem = ({
  letter,
  handleClick,
  classNames,
}: {
  letter: string;
  handleClick: (letter: string) => void;
  classNames?: string;
}) => {
  return (
    <div className={cn("relative w-24 h-24 ")}>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            className={cn("fill-current text-gray-200", classNames)}
            points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25"
          ></polygon>
        </svg>
        <button
          onClick={() => handleClick(letter)}
          className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg"
        >
          {letter}
        </button>
      </div>
    </div>
  );
};

export default HiveItem;
