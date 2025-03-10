const fileContent = await Deno.readTextFile("dogs.csv");

const rows = fileContent.split("\n");

console.log("Dogs:");

for (let i = 1; i < rows.length; i++) {
    const row = rows[i];


    if (row) {
        const [name, breed, age, favoriteFood] = row.split(",");

        console.log(` - ${name} is a ${breed} (${age}) that loves ${favoriteFood}`);
    }
}