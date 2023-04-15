import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthSection } from "./AuthSection";
import { MyVaccinesSection } from "./MyVaccinesSection";

const Stack = createStackNavigator();

// TODO -> inserir antes do app
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthSection} />
        <Stack.Screen name="Home" component={MyVaccinesSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
