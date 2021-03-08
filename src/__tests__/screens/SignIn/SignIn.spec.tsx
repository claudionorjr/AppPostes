import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';

import SignIn from '../../../screens/SignIn';

const mockedSignIn = jest.fn();

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

describe('SignIn page', () => {
  it('Should contain a username/password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    expect(getByPlaceholder('Username')).toBeTruthy();
    expect(getByPlaceholder('Password')).toBeTruthy();
  });

  it('Should be able user auth', async () => {
    const { getByPlaceholder, getByText } = render(<SignIn />);

    const inputUsername = getByPlaceholder('Username');
    const inputPassword = getByPlaceholder('Password');
    const button = getByText('Entrar');

    fireEvent.changeText(inputUsername, 'johnDoe');
    fireEvent.changeText(inputPassword, '123456');

    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalled();
    });
  });
});
