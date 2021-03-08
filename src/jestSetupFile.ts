import '@react-native-community/async-storage';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: async (...args: any) => args,
  setItem: async (...args: any) => args,
  removeItem: async (...args: any) => args,
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
