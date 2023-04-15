import { TouchableOpacity, Text } from "react-native";
import { colors } from "../data/theme";

type Props = {
  children: string;
  color: string;
  handleClick: () => void;
};

export function CustomButton({ children, color, handleClick }: Props) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 2,
        backgroundColor: color,
      }}
      onPress={handleClick}
    >
      <Text
        style={{
          color: colors.white,
          fontFamily: "averiaLibre-regular",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
