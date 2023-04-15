import { View, Text } from "react-native";

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
          color: "rgba(63, 146, 197, 1)",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "rgba(139, 139, 139, 1)",
        }}
      >
        {date}
      </Text>
    </View>
  );
}
