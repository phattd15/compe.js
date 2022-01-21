/**
 * @description Parse the string into integer
 * @param input 
 * @returns integer
 */
const toInt = (input: string) => {
  return parseInt(input);
}
/**
 * @description Parse the string into array of strings
 * @param input 
 * @returns [string]
 */
const stringArray = (input: string) => {
  return input.split(' ');
}
/**
 * @description Parse the string into array of integers
 * @param input
 * @returns [integers]
 */
const intArray = (input: string) => {
  return input.split(' ').map(x => toInt(x));
}
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

export {toInt, stringArray, intArray, Reader};