import React from 'react';
import { fireEvent, render, waitFor } from 'react-native-testing-library';

import Input from '../../elements/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input element', () => {
  it('Should be Truthy Input element', () => {
    const { getByPlaceholder } = render(
      <Input icon="mail" name="email" placeholder="to-test" />,
    );
    expect(getByPlaceholder('to-test')).toBeTruthy();
  });

  it('Should be able to chance text in Input', async () => {
    const { getByPlaceholder } = render(
      <Input icon="mail" name="jonhDoe" placeholder="to-test" />,
    );

    const input = getByPlaceholder('to-test');

    fireEvent.changeText(input, 'johnDoe');

    await waitFor(() => {
      expect(input).toBeTruthy();
    });
  });
});
