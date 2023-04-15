import { View, Text, TextInput } from "react-native";
import { colors } from "../data/theme";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function CustomInput({ label, value, onChange }: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "averiaLibre-regular" }}>
        {label}
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderRadius: 2,
          padding: 10,
          width: "80%",
          backgroundColor: colors.white,
          fontFamily: "averiaLibre-regular",
          color: colors.primaryMain,
        }}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}
