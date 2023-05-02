import { createContext } from "react";

export const TimerContext = createContext<ITimerValue>({
  minutes: 0,
  seconds: 0,
});

interface ITimerValue {
  minutes: number;
  seconds: number;
}
