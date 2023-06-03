import { View, Text } from "react-native";
import { colors } from "../../data/theme";

type Props = {
  title: string;
  nextDose?: Date;
};

export function NextVaccinesCard({ title, nextDose }: Props) {
  return (
    <View
      style={{
        display: "flex",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        width: 350,
        marginBottom: 10,
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
        {nextDose ? nextDose.toLocaleDateString() : "Não há data"}
      </Text>
    </View>
  );
}
