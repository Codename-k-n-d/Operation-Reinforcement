//require in login page
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { create } from 'react-test-renderer';
import Login from '../src/Views/Login';

describe('<Login />', () => {
  const testRenderer = TestRenderer.create(<Login />);
  // snapshot testing
  it("matches the snapshot", () => {
    // @ts-ignore
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
/*   const testInstance = testRenderer.root; 
  it('username field should render placeholder text', () => {
    console.log(testInstance);
    //expect(testInstance.props.className.includes('username-input')).toBe(true);
  });
  it('password field should render placeholder text', () => {

  });
  it('renders a button', () => {

  }); */
})


function Button() {
  return <button>Nothing to do for now</button>;
}

describe('Button Component', () => {
  it("Matches the snapshot", () => {
    const button = TestRenderer.create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
  it
});

