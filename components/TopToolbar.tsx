import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
};

export function TopToolbar({ title }: Props) {
  const openMenu = () => {
    console.log("open menu");
  };

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={openMenu}>
        <Text style={styles.toolBarButton}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.toolbarText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingBottom: 10,
    gap: 10,
    backgroundColor: "rgba(193, 231, 227, 1)",
  },

  toolBarButton: {
    fontSize: 46,
    color: "rgba(173, 212, 208, 1)",
  },

  toolbarText: {
    fontSize: 32,
    color: "rgba(65, 158, 215, 1)",
    fontFamily: "averiaLibre-regular",
  },
});
