import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack, useLocalSearchParams } from 'expo-router';
import Answer from '@/components/Answers';


export default function DetailScreen() {
  const params = useLocalSearchParams()
  return (
    <ParallaxScrollView
      >
        {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">{params.subject}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Answer data={params.item} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
