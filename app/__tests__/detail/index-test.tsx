import { render, within } from '@testing-library/react-native';
import { renderRouter, screen } from 'expo-router/testing-library';

import DetailScreen from '@/app/detail';
import { useLocalSearchParams } from 'expo-router';

const mockedUsedSearchLocalParams = {item: ['1,2,3,4']};

jest.mock('expo-router', () => ({
   ...jest.requireActual('expo-router') as any,
  useLocalSearchParams: () => mockedUsedSearchLocalParams,
}));

describe('<DetailScreen />', () => {
  test('Screen renders correctly on DetailScreen', () => {
    let params = useLocalSearchParams()
    params = mockedUsedSearchLocalParams
    const { getAllByTestId } = render(<DetailScreen />);

    const items = getAllByTestId("listItemTitle");
    
    expect(items.length).toBe(4)
  });
});
