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
import { useTranslations } from "next-intl";

export default function HowToPlay() {
  const t = useTranslations("Index");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Settings className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">{t("howToPlay")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-x-2 gap-2 text-sm">
          <ul className="list-disc">
            <li>{t("atLeastFourLetters")}</li>
            <li>{t("centerLetter")}</li>
            <li>{t("moreThanOnce")}</li>
            <li>{t("hypens")}</li>
          </ul>
          <p className="font-semibold">{t("scorePoints")}</p>
          <ul className="list-disc">
            <li>{t("fourLetterWords")} </li>
            <li> {t("longerWords")} </li>
            <li>{t("pangram")}</li>
          </ul>
        </div>
        <DialogFooter className="sm:justify-start">
          {t("feedback")}: aydinterzi7@gmail.com
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
