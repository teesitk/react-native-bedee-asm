import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card, Chip, IconButton, MD3Colors, Searchbar, TouchableRipple } from 'react-native-paper';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const colorScheme = useColorScheme()
  return (
    <ParallaxScrollView
      // headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      // headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Leader Board</ThemedText>
      </ThemedView>
      <Card>
        <Card.Cover source={ require('@/assets/images/banners/hero.jpg') } />
      </Card>
      <ThemedView style={{ justifyContent: 'center', ...styles.menuSection }}>
        <IconButton
          icon="camera"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="bicycle"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="cart"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="flask"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
      </ThemedView>
      <ThemedView style={{ justifyContent: 'center', ...styles.menuSection }}>
        <IconButton
          icon="heart"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="thermometer"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="nutrition"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="beer"
          iconColor={'white'}
          size={40}
          containerColor={Colors[colorScheme ?? 'light'].tint}
          style={styles.menuButton}
          onPress={() => console.log('Pressed')}
        />
      </ThemedView>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  menuSection: {
    flexDirection: 'row',
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: '100%',
    gap: 12,
  },
  menuButton: {
    // flex: 1
  }
});
