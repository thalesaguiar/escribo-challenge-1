function Sum(num) {
  
  let result = 0;
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }
  console.log(result)
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = 0;

rl.question("Digite um número inteiro positivo: ", (answer) => {
  num = answer;
  Sum(num);

  rl.close();
});
