import { View } from "react-native";
import { CustomButton } from "./CustomButton";
import { TopToolbar } from "./TopToolbar";
import { ReactNode } from "react";
import { colors } from "../data/theme";

type Props = {
  toolbarTitle: string;
  children: ReactNode;
  drawerProps: any;
};

export function MainScreenContent({
  toolbarTitle,
  children,
  drawerProps,
}: Props) {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        backgroundColor: colors.bgDark,
      }}
    >
      <TopToolbar title={toolbarTitle} drawerProps={drawerProps} />
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
      </View>
    </View>
  );
}
