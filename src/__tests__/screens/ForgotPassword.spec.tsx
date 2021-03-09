import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';

import ForgotPassword from '../../screens/ForgotPassword';
import {
  mockedForgotPassword,
  mockedGoBack,
  mockedPlatform,
} from '../jestSetupFile';

describe('ForgotPassword screen', () => {
  beforeEach(() => {
    mockedForgotPassword.mockClear();
  });

  it('Should contain a username inputs', () => {
    const { getByPlaceholder } = render(<ForgotPassword />);
    mockedPlatform('android');
    expect(getByPlaceholder('Username')).toBeTruthy();
  });

  it('Should be able to recovery account', async () => {
    const { getByPlaceholder, getByText } = render(<ForgotPassword />);

    const inputUsername = getByPlaceholder('Username');
    const button = getByText('Recuperar');

    fireEvent.changeText(inputUsername, 'johnDoe');
    mockedPlatform('ios');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedForgotPassword).toHaveBeenCalled();
    });
  });

  it('Should be able to access SignIn Page', async () => {
    const { getByText } = render(<ForgotPassword />);
    const button = getByText('Voltar para login');
    fireEvent.press(button);
    mockedPlatform('ios');
    await waitFor(() => {
      expect(mockedGoBack).toBeCalled();
    });
  });

  it('Should not be able to create account with invalid credencials', async () => {
    const { getByPlaceholder, getByText } = render(<ForgotPassword />);

    const inputUsername = getByPlaceholder('Username');
    const button = getByText('Recuperar');

    fireEvent.changeText(inputUsername, '');

    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedForgotPassword).not.toHaveBeenCalled();
    });
  });
});
