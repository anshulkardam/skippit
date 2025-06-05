import { ColorSchemeProvider, useColorSchemeContext } from "@/contexts/ColorSchemeProvider";
import "../global.css";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
};


const ThemeWrapper = () => {
  const { scheme } = useColorSchemeContext();
  const theme = scheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <InitialLayout />
    </ThemeProvider>
  );
}


const RootLayout = () => {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ColorSchemeProvider>
        <ThemeWrapper />
      </ColorSchemeProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
