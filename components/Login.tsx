import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const TextInputExample = () => {
  const [name, onChangeText] = React.useState("");
  const [password, onChangeTexT] = React.useState("");
  const login = () => {
    console.log(name, password);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Username"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTexT}
        value={password}
        placeholder="Password"
      />

      <Button onPress={login} title="Login" color="#841584" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
