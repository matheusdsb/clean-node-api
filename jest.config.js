module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/data/usecases/account/add-account/db-add-account-protocols.ts',
    '!<rootDir>/src/data/usecases/account/authentication/db-authentication-protocols.ts',
    '!<rootDir>/src/data/usecases/account/load-account-by-token/db-load-account-by-token.-protocols.ts',
    '!<rootDir>/src/data/usecases/survey/add-survey/db-add-survey-protocols.ts',
    '!<rootDir>/src/data/usecases/survey/load-surveys/db-load-surveys-protocols.ts',
    '!<rootDir>/src/data/usecases/survey/load-survey-by-id/db-load-survey-by-id-protocols.ts',
    '!<rootDir>/src/data/usecases/survey-result/save-survey-result/db-save-survey-result-protocols.ts',
    '!<rootDir>/src/presentation/controllers/login/login/login-controller-protocols.ts',
    '!<rootDir>/src/presentation/controllers/login/signup/signup-controller-protocols.ts',
    '!<rootDir>/src/presentation/controllers/survey/load-surveys/load-sorvey-controller-protocols.ts',
    '!<rootDir>/src/presentation/controllers/survey/add-survey/add-sorvey-controller-protocols.ts',
    '!<rootDir>/src/presentation/controllers/survey-result/save-survey-result/save-survey-result-controller-protocols.ts',
    '!<rootDir>/src/presentation/middlewares/auth-middleware-protocols.ts',
    '!<rootDir>/src/presentation/protocols/index.ts',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
