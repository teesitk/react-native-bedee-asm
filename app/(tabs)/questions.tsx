import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Questions from '@/components/Questions';
import { shuffle } from '@/utils/shuffle';
import questionsStore from '@/state/questionsStore';


export default function QuestionsScreen() {
    let questions = questionsStore.fetchQuestions()
    shuffle(questions.data)
  return (
    <ParallaxScrollView
      // headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      // headerImage={
      //   <Image
      //     source={require('@/assets/images/partial-react-logo.png')}
      //     style={styles.reactLogo}
      //   />
      // }
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Frequently FAQ</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Questions data={questions.data}/>
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
