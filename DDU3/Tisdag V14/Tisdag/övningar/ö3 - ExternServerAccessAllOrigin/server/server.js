function handler(request) {

  const url = new URL(request.url);
  if (request.method != "GET") {
    return new Response(null, {status: 400});
  }

  if (url.pathname == "/randomColor") {
    const randomColors = ["pink", 'lime', "skyblue", "lightgreen", "gold"];
    const randomIndex = Math.floor(randomColors.length * Math.random());
    const randomColor = randomColors[randomIndex];
    return new Response(randomColor);
  }

  return new Response(null, {status: 400});
}

Deno.serve({port: 4242}, handler);