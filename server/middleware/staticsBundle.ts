import path from "path";
import express from "express";

const rootDir = process.cwd();

export const staticsBundle = () => {
  return express.static(path.join(rootDir, "dist"));
};
