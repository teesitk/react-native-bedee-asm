import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Header } from 'react-native-elements';
import { PaperProvider } from 'react-native-paper';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <PaperProvider>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        header: (props) => <Header
        backgroundColor={Colors[colorScheme ?? 'light'].tint}
        placement="left"
        centerComponent={{ text: 'BeDee', style: { color: '#fff', fontSize: 18} }}
        />
        // headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Leader Board',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'trophy' : 'trophy-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="questions"
        options={{
          title: 'Questions',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bulb' : 'bulb-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
    </PaperProvider>
    </>
  );
}
