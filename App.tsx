import { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./components/navigation/Navigation";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "averiaLibre-regular": require("./assets/fonts/AveriaLibre-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await getFonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
