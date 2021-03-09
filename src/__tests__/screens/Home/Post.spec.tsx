import React from 'react';
import { fireEvent, render, waitFor } from 'react-native-testing-library';
import { Post as TypePost } from '../../../@types/Post';

import Post from '../../../screens/Home/FeedUI/Post';
import {
  mockedReactionLoveIt,
  mockedReactionLikeIt,
} from '../../jestSetupFile';

const mockPost: TypePost = {
  activeUserLikedIt: 0,
  activeUserLovedIt: 0,
  content: 'JohnDoe',
  author: {
    id: 1,
    username: 'JohnDoe',
  },
  createdAt: new Date(),
  id: 1,
  likes: 10,
  loves: 10,
  updatedAt: new Date(),
};

const mockActiveUser: TypePost = {
  activeUserLikedIt: 1,
  activeUserLovedIt: 1,
  content: 'JohnDoe',
  author: {
    id: 1,
    username: 'JohnDoe',
  },
  createdAt: new Date(),
  id: 1,
  likes: 10,
  loves: 10,
  updatedAt: new Date(),
};

describe('Post screen', () => {
  beforeEach(() => {
    mockedReactionLoveIt.mockClear();
    mockedReactionLikeIt.mockClear();
  });

  it('Should be rendered the Post screen', async () => {
    mockedReactionLoveIt.mockImplementation(() => Promise.reject());
    const { getByText } = render(<Post post={mockPost} />);

    await waitFor(() => {
      expect(getByText('JohnDoe')).toBeTruthy();
    });
  });

  it('Should be rendered the Post screen when active user rest the Post', async () => {
    mockedReactionLikeIt.mockImplementation(() => Promise.reject());
    const { getByText } = render(<Post post={mockActiveUser} />);

    await waitFor(() => {
      expect(getByText('JohnDoe')).toBeTruthy();
    });
  });

  it('Should be able to love the Post', async () => {
    mockedReactionLoveIt.mockImplementation(() => Promise.resolve());
    const { getByTestId } = render(<Post post={mockActiveUser} />);

    const loveButton = getByTestId('heart-reaction-button');

    fireEvent.press(loveButton);

    await waitFor(() => {
      expect(loveButton).toBeTruthy();
    });
  });

  it('Should not be able to love the Post with no active user', async () => {
    mockedReactionLoveIt.mockImplementation(() => Promise.reject());
    const { getByTestId } = render(<Post post={mockPost} />);

    const loveButton = getByTestId('heart-reaction-button');

    fireEvent.press(loveButton);

    await waitFor(() => {
      expect(loveButton).toBeTruthy();
    });
  });

  it('Should not be able to love the Post with active user', async () => {
    mockedReactionLoveIt.mockImplementation(() => Promise.reject());
    const { getByTestId } = render(<Post post={mockActiveUser} />);

    const loveButton = getByTestId('heart-reaction-button');

    fireEvent.press(loveButton);

    await waitFor(() => {
      expect(loveButton).toBeTruthy();
    });
  });

  it('Should be able to like the Post', async () => {
    mockedReactionLikeIt.mockImplementation(() => Promise.resolve());
    const { getByTestId } = render(<Post post={mockActiveUser} />);

    const likeButton = getByTestId('like-reaction-button');

    fireEvent.press(likeButton);

    await waitFor(() => {
      expect(likeButton).toBeTruthy();
    });
  });

  it('Should not be able to like the Post with no active user', async () => {
    mockedReactionLikeIt.mockImplementation(() => Promise.reject());
    const { getByTestId } = render(<Post post={mockPost} />);

    const likeButton = getByTestId('like-reaction-button');

    fireEvent.press(likeButton);

    await waitFor(() => {
      expect(likeButton).toBeTruthy();
    });
  });

  it('Should not be able to like the Post with active user', async () => {
    mockedReactionLikeIt.mockImplementation(() => Promise.reject());
    const { getByTestId } = render(<Post post={mockActiveUser} />);

    const likeButton = getByTestId('like-reaction-button');

    fireEvent.press(likeButton);

    await waitFor(() => {
      expect(likeButton).toBeTruthy();
    });
  });
});
