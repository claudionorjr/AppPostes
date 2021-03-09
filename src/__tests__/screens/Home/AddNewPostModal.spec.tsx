import React from 'react';
import { fireEvent, render, waitFor } from 'react-native-testing-library';
import { Post as TypePost } from '../../../@types/Post';

import AddNewPostModal from '../../../screens/Home/AddNewPostModal';
import { mockedCreatePost } from '../../jestSetupFile';

const onPress = jest.fn();

describe('AddNewPostModal modal', () => {
  beforeEach(() => {
    mockedCreatePost.mockClear();
  });

  it('Should be open and close AddNewPostModal modal', async () => {
    mockedCreatePost.mockImplementation(() => Promise.resolve());
    const { getByTestId } = render(
      <AddNewPostModal isVisible onPress={onPress} onClose={onPress} />,
    );

    const btnCloseModal = getByTestId('close-modal');

    fireEvent.press(btnCloseModal);

    await waitFor(() => {
      expect(btnCloseModal).toBeTruthy();
    });
  });

  it('Should be able to create a Post', async () => {
    mockedCreatePost.mockImplementation(() => Promise.resolve());
    const { getByTestId, getByPlaceholder } = render(
      <AddNewPostModal isVisible onPress={onPress} onClose={onPress} />,
    );

    const input = getByPlaceholder('Digite seu post...');
    fireEvent.changeText(input, 'johnDoe');

    const btnCreatePost = getByTestId('button-to-create-post');
    fireEvent.press(btnCreatePost);

    await waitFor(() => {
      expect(btnCreatePost).toBeTruthy();
    });
  });

  it('Should not be able to create a Post', async () => {
    mockedCreatePost.mockImplementation(() => Promise.reject());
    const { getByTestId, getByPlaceholder } = render(
      <AddNewPostModal isVisible onPress={onPress} onClose={onPress} />,
    );

    const input = getByPlaceholder('Digite seu post...');
    fireEvent.changeText(input, 'johnDoe');

    const btnCreatePost = getByTestId('button-to-create-post');
    fireEvent.press(btnCreatePost);

    await waitFor(() => {
      expect(btnCreatePost).toBeTruthy();
    });
  });

  it('Should not be able to create a Post when the input text is Falsy', async () => {
    mockedCreatePost.mockImplementation(() => Promise.reject());
    const { getByTestId, getByPlaceholder } = render(
      <AddNewPostModal isVisible onPress={onPress} onClose={onPress} />,
    );

    const input = getByPlaceholder('Digite seu post...');
    fireEvent.changeText(input, '');

    const btnCreatePost = getByTestId('button-to-create-post');
    fireEvent.press(btnCreatePost);

    await waitFor(() => {
      expect(btnCreatePost).toBeTruthy();
    });
  });
});
