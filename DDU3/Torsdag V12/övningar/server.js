import { serveFile } from "jsr:@std/http";

async function handler(request) {
    const url = new URL(request.url);

    if (url.pathname == "/") {
        return serveFile(request, "tests.html");

        
    }

    if (request.method === "GET") {
        if (url.pathname != "dogs") {
            return new Response({ status : 404 });
        }
    }

    return new Response("TODO...");
}

Deno.serve(handler);