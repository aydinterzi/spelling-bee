import { Copy, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function HowToPlay() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Settings className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">How to play</DialogTitle>
          <DialogDescription>
            Create words using letters from the hive and try to get the maximum
            score.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-x-2 gap-2 text-sm">
          <ul className="list-disc">
            <li>Words must have at least four letters.</li>
            <li>Words must include the center letter.</li>
            <li>Letters can be used more than once.</li>
            <li>
              Words with hyphens, proper nouns, vulgarities, and especially
              obscure words are not in the word list.
            </li>
          </ul>
          <p className="font-semibold">
            Score points to increase your rating. 4-letter words are worth 1
            point
          </p>
          <ul className="list-disc">
            <li> 4-letter words are worth 1 point each. </li>
            <li> Longer words earn 1 point per letter. </li>
            <li>
              Each puzzle includes at least one “pangram” which uses every
              letter. These are worth 7 extra points!
            </li>
          </ul>
        </div>
        <DialogFooter className="sm:justify-start">
          Feedback: aydinterzi7@gmail.com
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
