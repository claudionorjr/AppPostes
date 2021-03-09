import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';

import SignUp from '../../screens/SignUp';
import {
  mockedCreateAccount,
  mockedPlatform,
  mockedGoBack,
} from '../jestSetupFile';

describe('SignUp screen', () => {
  beforeEach(() => {
    mockedCreateAccount.mockClear();
  });

  it('Should contain a username/password inputs', () => {
    const { getByPlaceholder } = render(<SignUp />);
    mockedPlatform('android');
    expect(getByPlaceholder('Username')).toBeTruthy();
    expect(getByPlaceholder('Password')).toBeTruthy();
  });

  it('Should be able to create account', async () => {
    const { getByPlaceholder, getByText } = render(<SignUp />);

    const inputUsername = getByPlaceholder('Username');
    const inputPassword = getByPlaceholder('Password');
    const button = getByText('Cadastrar');

    fireEvent.changeText(inputUsername, 'johnDoe');
    fireEvent.changeText(inputPassword, '123456');

    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedCreateAccount).toHaveBeenCalled();
    });
  });

  it('Should not be able to create account with invalid credencials', async () => {
    const { getByPlaceholder, getByText } = render(<SignUp />);

    const inputUsername = getByPlaceholder('Username');
    const inputPassword = getByPlaceholder('Password');
    const button = getByText('Cadastrar');

    fireEvent.changeText(inputUsername, '');
    fireEvent.changeText(inputPassword, '');

    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedCreateAccount).not.toHaveBeenCalled();
    });
  });

  it('Should not be able to create account with another error', async () => {
    mockedCreateAccount.mockImplementation(() => {
      throw new Error();
    });
    const { getByPlaceholder, getByText } = render(<SignUp />);

    const inputUsername = getByPlaceholder('Username');
    const inputPassword = getByPlaceholder('Password');
    const button = getByText('Cadastrar');

    fireEvent.changeText(inputUsername, 'johnDoe');
    fireEvent.changeText(inputPassword, '123456');

    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedCreateAccount).toHaveBeenCalled();
    });
  });

  it('Should be able to access SignIn Page', async () => {
    const { getByText } = render(<SignUp />);
    const button = getByText('Voltar para Login');
    fireEvent.press(button);
    mockedPlatform('ios');
    await waitFor(() => {
      expect(mockedGoBack).toBeCalled();
    });
  });
});
