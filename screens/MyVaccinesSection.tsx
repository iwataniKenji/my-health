import { StyleSheet, View } from "react-native";
import { Searchbar } from "../components/Searchbar";
import { CardsSection } from "../components/CardsSection";
import { CustomButton } from "../components/CustomButton";
import { TopToolbar } from "../components/TopToolbar";

export function MyVaccinesSection() {
  return (
    <View style={styles.screen}>
      <TopToolbar />
      <View style={styles.content}>
        <Searchbar />
        <CardsSection />
        <CustomButton color="rgba(55, 189, 109, 1)" handleClick={() => {}}>
          Nova vacina
        </CustomButton>
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

  content: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    marginTop: 30,
    marginHorizontal: "auto",
  },
});
