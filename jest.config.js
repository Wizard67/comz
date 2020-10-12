module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [ '**/__tests__/*.spec.ts' ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  }
}
