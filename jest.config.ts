module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    roots: ['<rootDir>/unit_tests'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };