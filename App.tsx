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
