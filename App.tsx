import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./ui/Timer";
import StartOrPauseButton from "./ui/StartOrPauseButton";
import { ITimerValue, TimerContext } from "./providers/currentTime";
import { useState } from "react";

export default function App() {
  const [timerValue, setTimerValue] = useState<ITimerValue>({
    minutes: 0,
    seconds: 0,
  });

  return (
    <TimerContext.Provider value={timerValue}>
      <View style={styles.container}>
        <Timer timerValue={timerValue} setTimer={setTimerValue} />
        <StartOrPauseButton />
        <StatusBar style="auto" />
      </View>
    </TimerContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
