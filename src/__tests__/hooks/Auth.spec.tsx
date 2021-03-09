import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';
import apiMock from '../../__mocks__/api';

describe('Auth hook', () => {
  it('Should be able to signIn', async () => {
    apiMock.onPost('/sign-in').reply(200, {});
    const { result, waitFor } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      username: 'johnDoe',
      password: '123456',
    });

    await waitFor(() => {
      expect(result.current.username).toBe('johnDoe');
    });
  });
});
