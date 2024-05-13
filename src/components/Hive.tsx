"use client";

import { useState } from "react";
import HiveItem from "./HiveItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTimer } from "react-timer-hook";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hive = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  const [word, setWord] = useState<string>("");
  const [findedWords, setFindedWords] = useState<string[]>([]);
  const handleClick = (letter: string) => {
    setWord((prev) => prev + letter);
  };
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEnter();
    }
    if (e.key === "Backspace") {
      setWord((prev) => prev.substring(0, prev.length - 1));
    }
  };

  const handleEnter = () => {
    setFindedWords((prev) => [...prev, word]);
    setWord("");
    // Zamanlayıcıyı kontrol et
    if (isRunning) {
      const remainingSeconds =
        seconds + minutes * 60 + hours * 3600 + days * 86400;
      const extendedTime = new Date();
      extendedTime.setSeconds(
        extendedTime.getSeconds() + 15 + remainingSeconds
      );
      restart(extendedTime);
    }
  };

  const handleStartGame = () => {
    start();
  };

  const handleRestartGame = () => {
    restart(time);
    setWord("");
    setFindedWords([]);
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="mx-auto mt-10 flex flex-col justify-center"
    >
      <div className="flex justify-between">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Finded words" />
          </SelectTrigger>
          <SelectContent defaultValue={findedWords[0]}>
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
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>

      <div className="mt-10 mx-auto w-[400px] h-[400px] flex flex-col items-center">
        <div className="flex gap-4">
          <Button onClick={handleStartGame}>Start game</Button>
          <Button onClick={handleRestartGame}>Restart game</Button>
        </div>
        <Input
          value={word}
          onChange={(e) => setWord(e.target.value.toLocaleUpperCase())}
          type="text"
          className="border-none text-3xl w-[250px]"
        />

        <div className="flex flex-col justify-center items-center -space-y-4">
          <div className="flex ">
            <HiveItem letter="A" handleClick={handleClick} />
            <HiveItem letter="B" handleClick={handleClick} />
          </div>
          <div className="flex ">
            <HiveItem letter="C" handleClick={handleClick} />
            <HiveItem letter="D" handleClick={handleClick} />
            <HiveItem letter="E" handleClick={handleClick} />
          </div>
          <div className="flex ">
            <HiveItem letter="F" handleClick={handleClick} />
            <HiveItem letter="G" handleClick={handleClick} />
          </div>
          <div className="flex !mt-10 gap-5">
            <Button
              onClick={() =>
                setWord((prev) => prev.substring(0, prev.length - 1))
              }
            >
              Delete
            </Button>

            <Button onClick={handleEnter}>Enter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hive;
