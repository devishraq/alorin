/**
 * Generates a unique random number of the specified length.
 * @param length The length of the random number to generate.
 * @returns The generated random number.
 */
export function ranNum(length: number): number | string {
      if (length <= 0) return 0;

      const timestamp = Date.now().toString();
      const timestampLength = timestamp.length;

      if (length <= timestampLength) {
            return parseInt(timestamp.slice(0, length), 10);
      }

      const randomPartLength = length - timestampLength;

      let digits = new Array(randomPartLength);
      for (let i = 0; i < randomPartLength; i++) {
            digits[i] = Math.floor(Math.random() * 10);
      }

      const randomPart = digits.join("");
      const result = timestamp + randomPart;

      if (length > 16) {
            return result.slice(0, length);
      } else {
            return parseInt(result.slice(0, length), 10);
      }
}
