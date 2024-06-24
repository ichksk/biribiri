import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { TopView } from 'screens';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "KaijuFont": require("./assets/fonts/kaijufont-free.otf"),
    "TsunagiGothic": require("./assets/fonts/TsunagiGothic.ttf"),
    "SenobiGothicBold": require("./assets/fonts/Senobi-Gothic-Bold.ttf"),
    "SenobiGothicMedium": require("./assets/fonts/Senobi-Gothic-Medium.ttf"),
    "SenobiGothicRegular": require("./assets/fonts/Senobi-Gothic-Regular.ttf"),
    "YasashisaGothicBold": require("./assets/fonts/YasashisaGothicBold.otf"),

  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <RecoilRoot>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style="auto" />
          <TopView/>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
