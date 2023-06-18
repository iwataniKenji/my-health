import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { colors } from "../data/theme";

type Props = {
  children: string;
  color: string;
  handleClick: () => void;
  isLoading?: boolean;
};

export function CustomButton({
  children,
  color,
  handleClick,
  isLoading,
}: Props) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 2,
        backgroundColor: color,
      }}
      onPress={handleClick}
      disabled={isLoading}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {isLoading && (
          <ActivityIndicator style={{ height: 15 }} color="white" />
        )}
        <Text
          style={{
            color: colors.white,
            fontFamily: "averiaLibre-regular",
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
