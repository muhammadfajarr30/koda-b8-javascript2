const { calculateNumbers } = require("./function.js");

try {
  const numbers = [10, 20, 30, 40];
  const result = calculateNumbers(numbers);

  console.log(result.min);
  console.log(result.max);
  console.log(result.average);
} catch (error) {
  console.error(`terjadi kesalahan: ${error.message}`);
}
