module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    resources: "usable",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
