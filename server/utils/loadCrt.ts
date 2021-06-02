import fs from "fs";

export const loadCrt = () => {
  const ca = fs.readFileSync("./ssl/RootCA.crt");
  const cert = fs.readFileSync("./ssl/localhost.crt");
  const key = fs.readFileSync("./ssl/localhost.key");
  return { cert, key, ca };
};
