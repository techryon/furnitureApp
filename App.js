import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  // We are using custom fonts, so to load/install on the app we need to useFonts
  // We have to iterate through all the fonts we have, so we are going to use map

  const [fontsLoaded] = useFonts({
    // useFonts async loads the fonts in background and returns an array with 1 element. Which is a boolean flag,
    // if fonts are load "fontsLoaded" will return true, otherwise will return false

    // naming the fonts as what we are going to use in the app
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  // Now we need to define a callback function to be called when the root view layout changes
  // https://docs.expo.dev/versions/latest/sdk/splash-screen/
  // the callback checks if our fonts are loaded or not
  const onLayoutRootView = useCallback(async () => {
    //if font is loaded, hide the splash screen
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
