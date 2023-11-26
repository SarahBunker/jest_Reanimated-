import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// Mock NativeAnimatedHelper if it's needed in your tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => {
  // Provide a mocked implementation if necessary
  return {
    // Mocked functions or values here
  };
});
