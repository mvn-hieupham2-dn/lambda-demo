/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  rootDir: '.',
  setupFiles: ['dotenv/config'],
  moduleDirectories: [
    'src/layers/shared/nodejs/node_modules',
    'node_modules'
  ],
  testMatch: [
    './**/**/index.test.ts',
    './**/**/usecase.test.ts',
    './**/**/repository.test.ts'
  ],
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '//node_modules/(?!variables/.*)',
    '//src/layers/shared/nodejs/node_modules/(?!variables/.*)'
  ]
}
