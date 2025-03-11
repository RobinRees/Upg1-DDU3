function createDogList (data) {
    let rows = data.split("\n");
}



function handleRequest(request) {
    const data = Deno.readTextFileSync("dogs.csv");
    const list = createDogList(data);
    return new Response (list, {
        headers: {"Content-type": "text/html"}
    });
}

Deno.serve(handleRequest);


/* 
Körs konstant.
Deno.serve = function(handleRequestFunc) {
    while (true) {
        const request = receiveRequestFromBrowser();
        handleRequestFunc(request);
        
        if (...) {
            break;
        }
    }

}

*/