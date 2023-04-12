import { useState } from "react";
import { MyVaccinesSection } from "./screens/MyVaccinesSection";
import { Home } from "./screens/Home";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "averiaLibre-regular": require("./assets/fonts/AveriaLibre-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <MyVaccinesSection />;
    // return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
