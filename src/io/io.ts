class IOController {
  inputFileDir: string;

  constructor(inputFileDir = "") {
    this.inputFileDir = inputFileDir;
  }

  getCurrentInputDir() {
    console.log(this.inputFileDir);
    return this.inputFileDir;
  }
}

// module.exports = IOController;

export { IOController };
