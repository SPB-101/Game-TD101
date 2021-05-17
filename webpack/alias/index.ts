import path from "path";
const rootDir = process.cwd();

export const alias = {
  "@resolvers": path.resolve(rootDir, "client/app/resolvers"),
  "@entities": path.resolve(rootDir, "client/app/entities"),
  "@component": path.resolve(rootDir, "client/src/component"),
  "@constants": path.resolve(rootDir, "constants"),
  "@actions": path.resolve(rootDir, "client/src/store/actions"),
  "@selectors": path.resolve(rootDir, "client/src/store/selectors"),
  "@reducers": path.resolve(rootDir, "client/src/store/reducers"),
  "@thunks": path.resolve(rootDir, "client/src/store/thunks"),
  "@assets": path.resolve(rootDir, "client/src/assets"),
  "@utils": path.resolve(rootDir, "client/src/utils"),
  "@utils-entity": path.resolve(rootDir, "client/app/utils"),
};
