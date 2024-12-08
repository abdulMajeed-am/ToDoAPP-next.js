module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', 
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
      '@/(.*)$': '<rootDir>/src/$1', 
    },
    testEnvironment: 'jest-environment-jsdom', 
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    collectCoverageFrom: [
      'src/**/*.{js,jsx}', 
    ],
  };
  