import React from 'react';
import { fireEvent, render, waitFor } from 'react-native-testing-library';

import Home from '../../../screens/Home';
import { mockedGetAllPosts } from '../../jestSetupFile';

describe('Home screen', () => {
  beforeEach(() => {
    mockedGetAllPosts.mockClear();
  });

  it('Should be rendered the Home screen', async () => {
    mockedGetAllPosts.mockImplementation(() => Promise.resolve());
    const { getByTestId } = render(<Home />);

    await waitFor(() => {
      expect(getByTestId('button-screen-home')).toBeTruthy();
    });
  });

  it('Should be able press to handleOpenModal', async () => {
    mockedGetAllPosts.mockImplementation(() => Promise.resolve());
    const { getByTestId } = render(<Home />);

    const button = getByTestId('button-screen-home');

    fireEvent.press(button);

    await waitFor(() => {
      expect(button).toBeTruthy();
    });
  });
});
