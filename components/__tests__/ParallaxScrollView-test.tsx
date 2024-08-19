import * as React from 'react';
import renderer from 'react-test-renderer';
import ParallaxScrollView from '../ParallaxScrollView';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

jest.useFakeTimers()

it(`renders correctly`, () => {
  const tree = renderer.create(<ParallaxScrollView><ThemedView><ThemedText>xxx</ThemedText></ThemedView></ParallaxScrollView>).toJSON();

  expect(tree).toMatchSnapshot();
});
