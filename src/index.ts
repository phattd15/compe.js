import { IOController } from "./io/io";

export const cli = (args: string[], cwd: string) => {
  console.log(args);
  console.log(cwd);
  let io = new IOController("holla");
  io.getCurrentInputDir();
};
