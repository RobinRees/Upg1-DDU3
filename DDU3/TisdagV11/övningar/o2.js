function handler (request) {
    let headers = "";


    for (const pair of request.headers.entries()) {
        const key = pair[0];
        const value = pair[1];


        headers += `
        <li>${key}: ${value}`
    }


    const text = `
      <p>Här är lite information om din förfrågan:</p>
  <ul>
    ${headers}
  </ul>
  `
    return new Response(text, {
        headers: {"Content-Type": "text/html"}
    });
}

Deno.serve(handler);
