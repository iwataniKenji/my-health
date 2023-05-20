import { View, Text, TextInput, TextInputProps } from "react-native";
import { colors } from "../../data/theme";

type Props = TextInputProps & {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
};

export function AuthCustomInput({
  label,
  value,
  onChangeText,
  ...rest
}: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: colors.white,
          fontFamily: "averiaLibre-regular",
          width: "20%",
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          height: 40,
          marginVertical: 12,
          borderRadius: 2,
          padding: 10,
          width: "80%",
          backgroundColor: colors.white,
          fontFamily: "averiaLibre-regular",
          color: colors.primaryMain,
        }}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
    </View>
  );
}
