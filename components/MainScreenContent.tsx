import { View } from "react-native";
import { CustomButton } from "./CustomButton";
import { TopToolbar } from "./TopToolbar";
import { ReactNode } from "react";
import { colors } from "../data/theme";

type Props = {
  toolbarTitle: string;
  children: ReactNode;
  props: any;
};

export function MainScreenContent({ toolbarTitle, children, props }: Props) {
  const returnToAuth = () => {
    props.navigation.popToTop();
  };

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        backgroundColor: colors.bgDark,
      }}
    >
      <TopToolbar title={toolbarTitle} />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
          marginTop: 30,
          marginHorizontal: "auto",
        }}
      >
        {children}
        <CustomButton color={colors.success} handleClick={returnToAuth}>
          Nova vacina
        </CustomButton>
      </View>
    </View>
  );
}
