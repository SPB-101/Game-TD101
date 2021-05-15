import packageJson from "../../package.json";

export const constants = {
  VERSION: JSON.stringify(packageJson.version),
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  PORT_ENV: JSON.stringify(process.env.PORT),
};
