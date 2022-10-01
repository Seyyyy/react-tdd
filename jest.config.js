const config = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

module.exports = config;
