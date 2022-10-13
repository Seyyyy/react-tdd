const config = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  transformIgnorePatterns: [
    `/node_modules/(?!(somePkg)|react-dnd|dnd-core|@react-dnd)`,
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

module.exports = config;
