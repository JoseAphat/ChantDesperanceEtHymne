import { useColorScheme } from '@/hooks/useColorScheme';
// import { useScreenOrientation } from '@/hooks/useScreenOrientation'; ← retirer
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useKeepAwake } from 'expo-keep-awake'; ← retirer
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react'; // ← ajouter

export default function RootLayout() {
  useEffect(() => {
    const activateKeepAwake = async () => {
      try {
        const { activateKeepAwakeAsync } = await import('expo-keep-awake');
        await activateKeepAwakeAsync();
      } catch (e) {
        console.warn("KeepAwake non disponible:", e);
      }
    };
    activateKeepAwake();
  }, []);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  const statusBarStyle = colorScheme === 'dark' ? 'light' : 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            animation: 'fade',
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style={statusBarStyle} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}