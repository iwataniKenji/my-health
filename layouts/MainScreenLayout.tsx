import { StyleSheet, View } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { TopToolbar } from "../components/TopToolbar";
import { ReactNode } from "react";

type Props = {
  toolbarTitle: string;
  children: ReactNode;
};

export function MainScreenLayout({ toolbarTitle, children }: Props) {
  return (
    <View style={styles.screen}>
      <TopToolbar title={toolbarTitle} />
      <View style={styles.content}>
        {children}
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
