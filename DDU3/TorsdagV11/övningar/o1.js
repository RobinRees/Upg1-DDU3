import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

function handler (request) {
    const data = Deno.readTextFileSync("dogs.json");
    return new Response(data);
}

console.log("Servern körs på http://localhost:3000");
serve(handler, { port: 3000 });