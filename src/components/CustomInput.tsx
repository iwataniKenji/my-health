import { View, Text, TextInput, TextInputProps } from "react-native";
import { colors } from "../data/theme";

type Props = TextInputProps & {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
};

export function CustomInput({ label, value, onChangeText, ...rest }: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
        marginLeft: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: colors.white,
          textAlign: "right",
          fontFamily: "averiaLibre-regular",
          width: "50%",
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          height: 35,
          marginVertical: 12,
          borderRadius: 2,
          paddingHorizontal: 10,
          width: "55%",
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
