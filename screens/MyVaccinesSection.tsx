import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "../components/Searchbar";
import { CardsSection } from "../components/CardsSection";

export function MyVaccinesSection() {
  const openMenu = () => {
    console.log("open menu");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={openMenu}>
          <Text>=</Text>
        </TouchableOpacity>
        <Text style={styles.toolbarText}>Minhas vacinas</Text>
      </View>
      <View style={styles.content}>
        <Searchbar />
        <CardsSection />
        <TouchableOpacity style={styles.newVaccineButton} onPress={openMenu}>
          <Text style={styles.buttonText}>Nova vacina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    display: "flex",
    backgroundColor: "rgba(173, 212, 208, 1)",
  },

  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "rgba(193, 231, 227, 1)",
  },

  toolbarText: {
    fontSize: 32,
    color: "rgba(65, 158, 215, 1)",
    fontFamily: "averiaLibre-regular",
  },

  content: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    marginTop: 30,
    marginHorizontal: "auto",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "averiaLibre-regular",
  },

  newVaccineButton: {
    backgroundColor: "rgba(55, 189, 109, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 2,
  },
});
