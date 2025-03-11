function handler(request) {
    const html = Deno.readTextFileSync("dogs.html");
    const options = {
        status: 200,
        statusText: "Ok",
        headers: { "Content-Type": "text/html"}
    }
    const response = new Response(html, options);
    return response;
}

Deno.server(handler);