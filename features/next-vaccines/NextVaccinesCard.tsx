import { View, Text } from "react-native";
import { colors } from "../../data/theme";

type Props = {
  title: string;
  date: string;
};

export function NextVaccinesCard({ title, date }: Props) {
  return (
    <View
      style={{
        display: "flex",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        width: "92%",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontFamily: "averiaLibre-regular",
          color: colors.primaryDark,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: colors.grayDark,
        }}
      >
        {date}
      </Text>
    </View>
  );
}
