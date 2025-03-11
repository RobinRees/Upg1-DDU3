/* 
Response - Vi ger ett svar - (Innehåll, {.... Header, method etc})


Request (Tar emot)

*/



function handler (request) {
    const url = request.url;
    const method = request.method;
    const userAgent = request.headers.get("user-agent");


    console.log(url, method, userAgent);
    const text = `
      <p>Här är lite information om din förfrågan:</p>
  <ul>
    <li>URL: ${url}</li>
    <li>Metod: ${method}</li>
    <li>User-agent: ${userAgent}</li>
  </ul>
  `
    return new Response(text, {
        headers: {"Content-Type": "text/html"}
    });
}

Deno.serve(handler);
