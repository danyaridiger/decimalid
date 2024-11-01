module.exports = {
  expand: true,
  displayName: {
    name: "decimalid",
    color: "bgGreen",
  },
  sandboxInjectedGlobals: [],
  globals: {
    INVALID_SIZE: "Invalid size",
  },
  injectGlobals: true,
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
    "jsx",
    "mjs",
    "node",
  ],
  resetModules: true,
  resetMocks: true,
  rootDir: "./",
  slowTestThreshold: 20,
  testEnvironment: "node",
  testLocationInResults: true,
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  fakeTimers: {
    legacyFakeTimers: true,
  },
}