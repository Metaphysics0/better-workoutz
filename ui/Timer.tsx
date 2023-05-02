import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimerContext } from "../providers/currentTime";

export default function Timer({
  setTimer,
}: {
  setTimer: React.Dispatch<React.SetStateAction<number>>;
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
      <Text style={{ fontSize: 30 }}>{value.seconds + 1}</Text>
    </View>
  );
}
