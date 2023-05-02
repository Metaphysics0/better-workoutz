import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./ui/Timer";
import StartOrPauseButton from "./ui/StartOrPauseButton";
import { TimerContext } from "./providers/currentTime";
import { useState } from "react";

export default function App() {
  const [timerValue, setTimerValue] = useState(0);

  return (
    <TimerContext.Provider value={timerValue}>
      <View style={styles.container}>
        <Timer setTimer={setTimerValue} />
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
