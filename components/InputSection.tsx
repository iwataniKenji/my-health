import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export function InputSection() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isValid, setIsValid] = useState(false); // TODO -> substituir por validação

  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      {!isValid && (
        <Text style={styles.invalidInput}>E-mail e/ou senha inválidos.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  inputText: {
    fontSize: 16,
    fontFamily: "averiaLibre-regular",
  },

  input: {
    height: 40,
    margin: 12,
    borderRadius: 2,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
    fontFamily: "averiaLibre-regular",
  },

  invalidInput: {
    color: "red",
    marginLeft: 60,
    fontFamily: "averiaLibre-regular",
  },
});