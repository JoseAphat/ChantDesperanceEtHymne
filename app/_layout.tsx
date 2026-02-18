import { useColorScheme } from '@/hooks/useColorScheme';
import { useScreenOrientation } from '@/hooks/useScreenOrientation';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  useScreenOrientation();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  // Ne jamais définir de backgroundColor ici.
  const statusBarStyle = colorScheme === 'dark' ? 'light' : 'dark';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

      {/* Edge-to-edge: style uniquement + translucide, aucune couleur */}
      <StatusBar style={statusBarStyle} translucent />
    </ThemeProvider>
  );
}
