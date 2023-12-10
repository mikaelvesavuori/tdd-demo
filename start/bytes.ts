/**
 * @description Returns the number of UTF-8 bytes of a string.
 * @see https://dev.to/rajnishkatharotiya/get-byte-size-of-the-string-in-javascript-20jm
 * @example
 * ```
 * const size = bytes('Hi!');
 * console.log('The size of the string was:', size); // 'The size of the string was: 3'
 * ```
 */
export function bytes(str: string) {
  return new Blob([str]).size;
}
