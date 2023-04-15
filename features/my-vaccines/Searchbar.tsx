import { useState } from "react";
import { TextInput, View } from "react-native";
import { colors } from "../../data/theme";

export function Searchbar() {
  const [search, onSearch] = useState("");

  return (
    <>
      {/* TODO -> adicionar ícone de lupa */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderRadius: 2,
            padding: 10,
            width: "90%",
            backgroundColor: colors.white,
            fontFamily: "averiaLibre-regular",
            color: colors.grayDark,
          }}
          onChangeText={onSearch}
          value={search}
          placeholder="PESQUISAR VACINA..."
        />
      </View>
    </>
  );
}
