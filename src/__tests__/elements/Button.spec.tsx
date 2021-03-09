import React from 'react';
import { render, waitFor } from 'react-native-testing-library';

import Button from '../../elements/Button';

const onPress = jest.fn();

describe('Button element', () => {
  it('Should be Truthy Button element', async () => {
    const { getByTestId } = render(
      <Button testID="johnDoe" text="johnDoe" onPress={onPress} isAddPost />,
    );
    await waitFor(() => {
      expect(getByTestId('johnDoe')).toBeTruthy();
    });
  });
});
