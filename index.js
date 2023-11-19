function Sum(num) {
  let result = 0;
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }
  return result;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro positivo: ", (answer) => {
  const num = parseInt(answer);
  const result = Sum(num);
  console.log(`O resultado é ${result}`);
  rl.close();
});
