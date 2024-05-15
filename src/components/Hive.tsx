"use client";

import { useEffect, useState } from "react";
import HiveItem from "./HiveItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTimer } from "react-timer-hook";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { useToast } from "./ui/use-toast";

type Words = {
  randomLetters: string;
  words: string[];
};

const Hive = ({ data }: { data: Words }) => {
  const [words, setWords] = useState<Words>();
  const t = useTranslations("Index");
  const { toast } = useToast();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  const [score, setScore] = useState<number>(0);
  const [word, setWord] = useState<string>("");
  const [findedWords, setFindedWords] = useState<string[]>([]);
  const handleClick = (letter: string) => {
    setWord((prev) => prev + letter);
  };
  const { seconds, minutes, hours, days, isRunning, pause, restart } = useTimer(
    {
      expiryTimestamp: time,
      onExpire: () => {
        alert(t("timeUp") + score);
        setScore(0);
        setFindedWords([]);
        const restartTime = new Date();
        restartTime.setSeconds(restartTime.getSeconds() + 60);
        restart(restartTime);
        pause();
      },
    }
  );

  useEffect(() => {
    const words = data[Math.floor(Math.random() * data.length)];
    setWords(words);
  }, [data]);

  const randomLetters = words?.randomLetters.split("");
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEnter();
    }
    if (e.key === "Backspace") {
      setWord((prev) => prev.substring(0, prev.length - 1));
    }
  };

  const handleWordFinded = (word: string) => {
    setFindedWords((prev) => [...prev, word]);
    setWords((prev) => {
      return {
        ...prev,
        words: prev.words.filter((w) => w !== word),
      };
    });
    const score = word.length === 7 ? 7 : word.length - 3;
    if (word.length === 7) {
      setScore((prev) => prev + score);
    } else {
      setScore((prev) => prev + score);
    }
    const remainingSeconds =
      seconds + minutes * 60 + hours * 3600 + days * 86400;
    const extendedTime = new Date();
    extendedTime.setSeconds(extendedTime.getSeconds() + 15 + remainingSeconds);
    restart(extendedTime);
    toast({
      title: "+ " + score,
    });
  };

  const handleEnter = () => {
    if (words.words.includes(word)) {
      handleWordFinded(word);
    } else {
      toast({
        title: t("wordNotFound"),
      });
    }
    setWord("");
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="mx-auto mt-10 flex flex-col justify-center"
    >
      <div className="flex justify-between">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("findedWords")} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {findedWords.map((word) => (
                <SelectItem disabled key={word} value={word}>
                  {word}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <span className="text-3xl font-bold">
            {t("score")}: {score}
          </span>
        </div>
        <div className="text-xl font-semibold">
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>

      <div className="mt-10 mx-auto w-[400px] h-[400px] flex flex-col items-center gap-10">
        <Input
          value={word}
          onChange={(e) => {
            setWord(e.target.value.toLocaleUpperCase());
          }}
          type="text"
          className="border-none text-3xl w-[250px] focus:outline-none"
        />

        {randomLetters && (
          <div className="flex flex-col justify-center items-center -space-y-4">
            <div className="flex ">
              <HiveItem letter={randomLetters[1]} handleClick={handleClick} />
              <HiveItem letter={randomLetters[2]} handleClick={handleClick} />
            </div>
            <div className="flex ">
              <HiveItem letter={randomLetters[3]} handleClick={handleClick} />
              <HiveItem
                classNames="!text-yellow-400"
                letter={randomLetters[0]}
                handleClick={handleClick}
              />
              <HiveItem letter={randomLetters[4]} handleClick={handleClick} />
            </div>
            <div className="flex ">
              <HiveItem letter={randomLetters[5]} handleClick={handleClick} />
              <HiveItem letter={randomLetters[6]} handleClick={handleClick} />
            </div>
            <div className="flex !mt-10 gap-5">
              <Button
                onClick={() =>
                  setWord((prev) => prev.substring(0, prev.length - 1))
                }
              >
                {t("delete")}
              </Button>

              <Button onClick={handleEnter}>{t("enterWord")}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hive;
