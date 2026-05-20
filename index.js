hitungAngka();
const numbers = [];
function hitungAngka() {
  if(!Array.isArray(numbers)) {
    throw new Error("Input harus berupa array");
  }
if(numbers.length === 0) {
  throw new Error("Array kosong");
}
if(typeof numbers[0] !== "number") {
  throw new Error("Input harus berupa angka");
}
  let min = numbers[0];
  let max = numbers[0];
  let totalNumbers = 0;
try {
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
console.log(max)
console.log(average);
} catch (error) {
  console.error(`terjadi kesalahan: ${error}`);   
} 
}
