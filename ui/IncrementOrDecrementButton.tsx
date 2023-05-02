import { Button } from "react-native";

export default function IncrementOrDecrementButton() {
  return (
    <Button title="Increase" onPress={() => console.log("i was clicked")} />
  );
}
