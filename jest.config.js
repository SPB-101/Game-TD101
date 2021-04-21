module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/client/src/testSetup/index.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/client/src/components/$1",
  },
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  roots: ["<rootDir>"],
  testRegex: "(/tests/.*|(\\.|/)test)\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/client/src/testSetup/fileTransformer.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
