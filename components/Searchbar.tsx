import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export function Searchbar() {
  const [search, onSearch] = useState("");

  return (
    <>
      {/* TODO -> adicionar ícone de lupa */}
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={onSearch}
          value={search}
          placeholder="PESQUISAR VACINA..."
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    height: 40,
    borderRadius: 2,
    padding: 10,
    width: "90%",
    backgroundColor: "#fff",
    fontFamily: "averiaLibre-regular",
    color: "rgba(139, 139, 139, 1)",
  },
});
