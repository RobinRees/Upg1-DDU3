const filename = "dogs.csv";


const command = Deno.args[0];
const newDog = Deno.args[1];


if (command === "add" && newDog) {
    const message = `${newDog}\n`;

    await Deno.writeTextFileSync(filename, message, { append: true});
    console.log(`${newDog} har lagts till i ${filename}`);

} else {
    console.log("Använd: deno --allow-write 04.js add <namn>")
}
