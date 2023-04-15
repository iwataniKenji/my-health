import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
};

export function TopToolbar({ title }: Props) {
  const openMenu = () => {
    console.log("open menu");
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 40,
        paddingBottom: 10,
        gap: 10,
        backgroundColor: "rgba(193, 231, 227, 1)",
      }}
    >
      <TouchableOpacity onPress={openMenu}>
        <Text
          style={{
            fontSize: 46,
            color: "rgba(173, 212, 208, 1)",
          }}
        >
          ☰
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 32,
          color: "rgba(65, 158, 215, 1)",
          fontFamily: "averiaLibre-regular",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
