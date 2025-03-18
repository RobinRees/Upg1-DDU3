const filename = "dogs.csv";


const command = Deno.args[0];
const newDog = Deno.args[1];


if (command === "add" && newDog) {
    const message = `${newDog}\n`;

    await Deno.writeTextFile(filename, message, { append: true});
    console.log(`${newDog} har lagts till i ${filename}`);

} else {
    console.log("Använd: deno --allow-write 04.js add <namn>")
}

if (command === "remove") {
    try {
        let fileContent = await Deno.readTextFile(filename);

        if (!fileContent.includes(newDog)) {
            console.log(`${newDog} does not exist`);
            Deno.exit(1);
        }


        fileContent = fileContent.split("\n").filter(dog => dog.trim() !== newDog).join("\n");
        await Deno.writeTextFile(filename, fileContent);
        console.log(`${newDog} was removed`);
    } catch {
        console.log("Filen finns inte eller är tom");
    }
}