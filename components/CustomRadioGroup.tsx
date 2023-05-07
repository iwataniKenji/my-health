import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { SelectOptions } from "../types/SelectOptions";

type Props = {
  value: any;
  setValue: any;
  options: SelectOptions[];
};

export function CustomRadioGroup({ value, setValue, options }: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginVertical: 4,
        paddingRight: 10,
      }}
    >
      {options.map((option) => {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value={option.value}
              status={value === option.value ? "checked" : "unchecked"}
              onPress={() => setValue(option.value)}
            />
            <Text style={{ fontSize: 10 }}>{option.label}</Text>
          </View>
        );
      })}
    </View>
  );
}
