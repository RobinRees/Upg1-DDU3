import { serveDir } from "jsr:@std/http";

function handler(request) {
    const opts = { fsRoot: "o3public"}
    return serveDir(request, opts);
}

Deno.serve(handler);