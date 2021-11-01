module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testRunner: 'jasmine2',
	collectCoverage: false,
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	collectCoverageFrom: ['./**/src/**/*.ts', './**/src/**/*.tsx'],
	coveragePathIgnorePatterns: ['index.ts', 'index.tsx', 'webpack.config.ts'],
	testMatch: ['./**/*.spec.(ts|tsx)'],
	testPathIgnorePatterns: ['/coverage/', '/node_modules/', '/lib/'],
}
