import React from 'react';
import { render, waitFor } from 'react-native-testing-library';

import FeedUI from '../../../screens/Home/FeedUI';
import { mockedGetAllPosts } from '../../jestSetupFile';

describe('FeedUI screen', () => {
  beforeEach(() => {
    mockedGetAllPosts.mockClear();
  });

  it('Should be rendered the FeedUI screen', async () => {
    mockedGetAllPosts.mockImplementation(() => Promise.reject());
    const { getByTestId } = render(<FeedUI newRequest />);

    await waitFor(() => {
      expect(getByTestId('container-posts-list')).toBeTruthy();
    });
  });
});
