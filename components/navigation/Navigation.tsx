import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthSection } from "../../features/auth/AuthSection";
import { DrawerComponent } from "../drawer/DrawerComponent";
import { CreateNewVaccineSection } from "../../features/create-new-vaccine/CreateNewVaccineSecion";
import { ResetPasswordSection } from "../../features/reset-password/ResetPasswordSection";
import { SignupSection } from "../../features/signup/SignupSection";

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
        <Stack.Screen name="Criar vacina" component={CreateNewVaccineSection} />
        <Stack.Screen name="Cadastro" component={SignupSection} />
        <Stack.Screen name="Password" component={ResetPasswordSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
