function handler (request) {

  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*"); //Detta gör att klienter (t.ex. din webbsida) får skicka förfrågningar till servern från vilken domän som helst.

  if (request.method === "OPTIONS") { return new Response(null, { headers: headersCORS }); }

  if (request.method != "GET") {
    return new Response(null, {headers: headers, status: 400});
  }

  const url = new URL(request.url);

  const c1 = url.searchParams.get("c1");
  const c2 = url.searchParams.get("c2");
  const c3 = url.searchParams.get("c3");  

  return new Response(`${c1} ${c2} ${c3}`, {headers: headers});
}

Deno.serve(handler);
