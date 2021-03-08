import '@react-native-community/async-storage';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: async (...args: any | any[]) => args,
  setItem: async (...args: any | any[]) => args,
  removeItem: async (...args: any | any[]) => args,
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
