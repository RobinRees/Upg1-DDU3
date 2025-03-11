const filename = "dogs.csv";
const dogs = ["Arya", "Ajla", "Findus"];
let message = "";



const options = { append: true };

for (const dog of dogs) {
    message += `${dog}\n`;
}

Deno.writeTextFileSync(filename, message, options);