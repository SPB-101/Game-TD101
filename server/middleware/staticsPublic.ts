import path from "path";
import express from "express";

const rootDir = process.cwd();

export const staticsPublic = () => {
  return express.static(path.join(rootDir, "client/public"));
};
