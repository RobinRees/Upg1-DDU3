const args = Deno.args;
let sum = 0; 

for (const arg of args) {
    if (!isNaN(arg)) {
        sum += Number(arg);
    }
}

console.log(sum);