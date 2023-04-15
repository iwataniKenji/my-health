import { createDrawerNavigator } from "@react-navigation/drawer";
import { MyVaccinesSection } from "../../features/my-vaccines/MyVaccinesSection";
import { NextVaccinesSection } from "../../features/next-vaccines/NextVaccinesSection";
import { DrawerContent } from "./DrawerContent";
import { ResetPasswordSection } from "../../features/reset-password/ResetPasswordSection";

const Drawer = createDrawerNavigator();

export function DrawerComponent() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Minhas vacinas" component={MyVaccinesSection} />
      <Drawer.Screen name="Próximas vacinas" component={NextVaccinesSection} />
      <Drawer.Screen name="Password" component={ResetPasswordSection} />
    </Drawer.Navigator>
  );
}
