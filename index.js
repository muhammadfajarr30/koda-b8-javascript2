const numbers = [11, 21, 31, 41, 51];
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
}

average = totalNumbers / numbers.length;
console.log(min);
console.log(max);
console.log(average);
