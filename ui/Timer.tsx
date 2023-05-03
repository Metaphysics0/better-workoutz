import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ITimerValue, TimerContext } from "../providers/currentTime";

export default function Timer({
  setTimer,
  timerValue,
}: {
  setTimer: React.Dispatch<React.SetStateAction<ITimerValue>>;
  timerValue: ITimerValue;
}) {
  const value = useContext(TimerContext);

  // let shouldCountDown = value > 0;

  // setTimeout(() => {
  //   if (shouldCountDown) {
  //     setTimer(value - 1);
  //   }
  // }, 1000);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{JSON.stringify(timerValue)}</Text>
    </View>
  );
}
