import { render } from '@testing-library/react-native';

import NotFoundScreen from '@/app/+not-found';

describe('<NotFoundScreen />', () => {
  test('Text renders correctly on NotFoundScreen', () => {
    const { getByText } = render(<NotFoundScreen />);

    const textLabel = getByText("This screen doesn't exist.");

    expect(textLabel).toBeTruthy();
  });
});
