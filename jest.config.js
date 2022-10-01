const config = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

module.exports = config;
