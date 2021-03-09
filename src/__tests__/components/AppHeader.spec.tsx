import React from 'react';
import { render, waitFor } from 'react-native-testing-library';

import AppHeader from '../../components/AppHeader';

const onPress = jest.fn();

describe('AppHeader component', () => {
  it('Should be Truthy AppHeader component', async () => {
    const { getByTestId } = render(
      <AppHeader testID="johnDoe" username="johnDoe" />,
    );
    await waitFor(() => {
      expect(getByTestId('johnDoe')).toBeTruthy();
    });
  });
});
