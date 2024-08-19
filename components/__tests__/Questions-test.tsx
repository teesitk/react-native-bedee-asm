import * as React from 'react';
import renderer from 'react-test-renderer';
import Questions from '../Questions';


it(`renders correctly`, () => {
  const tree = renderer.create(<Questions data={[]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
