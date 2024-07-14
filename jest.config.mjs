export default {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"],
	},
	moduleFileExtensions: ["js", "jsx"],
	testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
