import * as React from 'react';
import renderer from 'react-test-renderer';
import Answer from '../Answers';


it(`renders correctly`, () => {
  const tree = renderer.create(<Answer data={[]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
