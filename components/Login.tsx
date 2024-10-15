import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const TextInputExample = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeTexT] = React.useState("");
  const login = () => {
    console.log(text, number);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Username"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTexT}
        value={number}
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
