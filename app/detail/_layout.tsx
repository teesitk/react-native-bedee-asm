import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Header, Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack
      screenOptions={{
        header: (props) => <Header
        backgroundColor={Colors[colorScheme ?? 'light'].tint}
        placement="left"
        leftComponent={<TouchableHighlight onPress={props.navigation.goBack}><Icon name='chevron-left' type='font-awesome' color='white'size={18} /></TouchableHighlight>}
        centerComponent={{ text: 'Answer', style: { color: '#fff', fontSize: 18} }}
        />,
        headerBackVisible: true
      }}>
        <Stack.Screen name="index" />
      </Stack>
  );
}
