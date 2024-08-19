import { render } from '@testing-library/react-native';

import TabTwoScreen from '@/app/(tabs)';

describe('<TabTwoScreen />', () => {
  test('Text renders correctly on TabTwoScreen', () => {
    const { getByText } = render(<TabTwoScreen />);

    const textLabel = getByText("Leader Board");

    expect(textLabel).toBeTruthy();
  });
});
