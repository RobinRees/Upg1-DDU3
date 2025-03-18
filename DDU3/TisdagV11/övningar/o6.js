const filename = "dogs.csv";

async function handler(request) {
    if (request.method === "GET") {
        try {
            const list = (await Deno.readTextFile(filename))
            .split("{n")
            .map(dog => `<li>${dog}</li>`)
            .join("");
            return new Response(`<ul>${list}</ul>`, { headers: { "Content-Type": "text/html "}});
        } catch {
            return new Response ("<ul></ul>", { headers: { "Content-Type": "text/html" }});
        }
    }

    if (request.method === "POST") {
        const name = await request.text();
        await Deno.writeTextFile(filename, name + "\n", { append: true});
        return new Response(`<p>${name} was added </p>`, { headers: { "Content-Type": "text/html" }})
    }
}

Deno.serve(handler);