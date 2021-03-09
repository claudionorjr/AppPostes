import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';

import SignIn from '../../screens/SignIn';
import { mockedSignIn, mockedNavigate, mockedPlatform } from '../jestSetupFile';

describe('SignIn screen', () => {
  beforeEach(() => {
    mockedSignIn.mockClear();
  });

  it('Should contain a username/password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    expect(getByPlaceholder('Username')).toBeTruthy();
    expect(getByPlaceholder('Password')).toBeTruthy();
  });

  it('Should be able to authenticate', async () => {
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

  it('Should not be able to authenticate with invalid credencials', async () => {
    const { getByPlaceholder, getByText } = render(<SignIn />);

    const inputUsername = getByPlaceholder('Username');
    const inputPassword = getByPlaceholder('Password');
    const button = getByText('Entrar');

    fireEvent.changeText(inputUsername, '');
    fireEvent.changeText(inputPassword, '');

    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedSignIn).not.toHaveBeenCalled();
    });
  });

  it('Should not be able to authenticate with another error', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });
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

  it('Should be able to access SignUp Page', async () => {
    const { getByText } = render(<SignIn />);
    const button = getByText('Cadastrar');
    fireEvent.press(button);
    mockedPlatform('android');
    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith('SignUp');
    });
  });

  it('Should be able to access ForgotPassword Page', async () => {
    const { getByText } = render(<SignIn />);
    const button = getByText('Esqueci minha senha');
    fireEvent.press(button);
    mockedPlatform('ios');
    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith('ForgotPassword');
    });
  });
});
