const packageJson = require("./package.json");

module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/client/src/testSetup/index.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  testRegex: "(/tests/.*|(\\.|/)test)\\.(ts|tsx)$",
  globals: {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    VERSION: JSON.stringify(packageJson.version),
  },
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^@resolvers(.*)$": "<rootDir>client/app/resolvers/$1",
    "^@entities(.*)$": "<rootDir>client/app/entities/$1",
    "^@component(.*)$": "<rootDir>client/src/component/$1",
    "^@constants(.*)$": "<rootDir>constants/$1",
    "^@actions(.*)$": "<rootDir>client/src/store/actions/$1",
    "^@selectors(.*)$": "<rootDir>client/src/store/selectors/$1",
    "^@reducers(.*)$": "<rootDir>client/src/store/reducers/$1",
    "^@thunks(.*)$": "<rootDir>client/src/store/thunks/$1",
    "^@assets(.*)$": "<rootDir>client/src/assets/$1",
    "^@utils-entity(.*)$": "<rootDir>client/app/utils/$1",
    "^@utils(.*)$": "<rootDir>client/src/utils/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/client/src/testSetup/fileTransformer.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
