import Login from "./components/Login";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.input}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
