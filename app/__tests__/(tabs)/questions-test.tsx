import { render } from '@testing-library/react-native';

import QuestionsScreen from '@/app/(tabs)/questions';

describe('<QuestionsScreen />', () => {
  test('Text renders correctly on QuestionsScreen', () => {
    const { getByText, getAllByTestId } = render(<QuestionsScreen />);

    const textLabel = getByText("Frequently FAQ");
    const items = getAllByTestId('listitem')

    expect(textLabel).toBeTruthy();
    expect(items.length).toBe(20)
  });
});
