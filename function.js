
/**
 * @typedef {object} processedNumber
 * @property {number} min lowest number in the element of array
 * @property {number} max biggest number in the element of array
 * @property {number} average the average in the element of array
 */
/**
 * 
 * @param {number[]} numbers numbers of array to be calculated 
 * @returns {processedNumber} objects contains min, max, average
 * @throws {error} if parameter is not an array
 * @throws {error} if array is empty
 * @throws {error} if element of array is not a number
 * 
 */



function calculateNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input harus berupa array");
  }
  if (numbers.length === 0) {
    throw new Error("Array kosong");
  }
  if (typeof numbers[0] !== "number") {
    throw new Error("Input harus berupa angka");
  }
  let min = numbers[0];
  let max = numbers[0];
  let totalNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
    totalNumbers = totalNumbers + numbers[i];
    average = totalNumbers / numbers.length;
  }
  return {
    min,
    max,
    average,
  };
}

module.exports = {
  calculateNumbers,
};
