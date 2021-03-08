import React from 'react';
import { render } from 'react-native-testing-library';

import SignIn from '../../../screens/SignIn';

describe('SignIn page', () => {
  it('Should contain a username/password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    expect(getByPlaceholder('Username')).toBeTruthy();
    expect(getByPlaceholder('Password')).toBeTruthy();
  });
});
