import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  cacheDirectory: "<rootDir>/node_modules/.cache/jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts", ".tsx", ".mts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  moduleFileExtensions: ["ts", "tsx", "mts", "mjs", "js"],
  reporters: ["default", "github-actions"],
  testMatch: ["<rootDir>/src/**/*.test.(c|m)?[jt]s(x)?"],
  transform: {
    "^.+\\.[cm]?[jt]sx?$": [
      "babel-jest",
      { configFile: path.join(dirname, "babel.config.cjs") },
    ],
  },
};
