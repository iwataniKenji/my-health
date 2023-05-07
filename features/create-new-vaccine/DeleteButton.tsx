import { TouchableOpacity, Text, Image } from "react-native";
import { colors } from "../../data/theme";

import trashIcon from "../../assets/images/trash-icon.png";

type Props = {
  children: string;
  handleClick: () => void;
};

export function DeleteButton({ children, handleClick }: Props) {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 2,
        backgroundColor: colors.error,
      }}
      onPress={handleClick}
    >
      <Image
        source={trashIcon}
        resizeMode="contain"
        style={{
          height: 20,
          width: 20,
        }}
      />
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
