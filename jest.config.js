module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [ '**/*.spec.ts' ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  }
}
