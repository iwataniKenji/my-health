import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthSection } from "../features/auth/AuthSection";
import { DrawerComponent } from "./drawer/DrawerComponent";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthSection} />
        <Stack.Screen name="Drawer" component={DrawerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
