import AppLoading from "expo-app-loading";
import Navigation from "./components/Navigation";
import { useState } from "react";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "averiaLibre-regular": require("./assets/fonts/AveriaLibre-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigation />;
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
