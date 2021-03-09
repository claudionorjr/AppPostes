const mockedSignIn = jest.fn();
const mockedNavigate = jest.fn();
const mockedGoBack = jest.fn();
const mockedCreateAccount = jest.fn();
const mockedForgotPassword = jest.fn();
const mockedGetAllPosts = jest.fn();
const mockedReactionLikeIt = jest.fn();
const mockedReactionLoveIt = jest.fn();
const mockedCreatePost = jest.fn();

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('@react-native-community/async-storage', () => ({
  getItem: async (...args: any | any[]) => args,
  setItem: async (...args: any | any[]) => args,
  removeItem: async (...args: any | any[]) => args,
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
    goBack: mockedGoBack,
  }),
}));

jest.mock('../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
    createAccount: mockedCreateAccount,
    forgotPassword: mockedForgotPassword,
    username: 'johnDoe',
    token: 'johnDoe',
  }),
}));

jest.mock('../hooks/post', () => ({
  usePost: () => ({
    getAllPosts: mockedGetAllPosts,
    createPost: mockedCreatePost,
  }),
}));

jest.mock('../hooks/reaction', () => ({
  useReaction: () => ({
    reactionLoveIt: mockedReactionLoveIt,
    reactionLikeIt: mockedReactionLikeIt,
  }),
}));

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

function mockedPlatform(param: 'android' | 'ios') {
  if (param === 'android') {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
      select: () => null,
    }));
  } else {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'ios',
      select: () => null,
    }));
  }
}

export {
  mockedSignIn,
  mockedNavigate,
  mockedPlatform,
  mockedCreateAccount,
  mockedGoBack,
  mockedForgotPassword,
  mockedGetAllPosts,
  mockedReactionLikeIt,
  mockedReactionLoveIt,
  mockedCreatePost,
};
