/**
 * @description Parse the string into integer
 * @param input
 * @returns integer
 */
const toInt = (input: string) => {
  var res = parseInt(input.trim());
  if (isNaN(res)) {
    throw new Error(`Cannot parse ${input} to int`);
  }
  return res;
};
/**
 * @description Parse the string into array of integers
 * @param input
 * @returns [integers]
 */
const intArray = (input: string) => {
  return input
    .trim()
    .split(/\s+/)
    .map(x => toInt(x));
};
/**
 * IO object for read and write
 */
class Reader {
  rl: any;
  constructor(readline: any) {
    this.rl = readline;
  }
  /**
   * @description Read the integer on this line
   * @returns integer
   */
  readInt(): number {
    return toInt(this.rl());
  }
  /**
   * @description Read the whole line as the string
   * @returns Read the whole line as a string
   */
  readLine(): string {
    return this.rl();
  }
  /**
   * @description Read the whole line as an array
   * @returns The number array
   */
  readArray(): number[] {
    return intArray(this.rl());
  }
}

export { Reader };
