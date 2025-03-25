import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

async function handler (request) {
    const data = Deno.readTextFileSync("dogs.json");
    const filename = "dogs.json"
    const options = {
        headers: { "Content-Type" : "application/json"}
    };

    if (request.method === "POST") {
        const contentType = request.headers.get("Content-Type");

        if (contentType === "application/json") {
            const requestData = await request.json();

            
            if (requestData.name != undefined &&
                requestData.breed != undefined &&
                requestData.age != undefined &&
                requestData.weight != undefined &&
                requestData.favorite_treats != undefined) {

                    const dataToJS = JSON.parse(data)
                    dataToJS.push(requestData);
                    const newJSONData = JSON.stringify(dataToJS, null, 2);
                    Deno.writeTextFileSync(filename, newJSONData); 
                } else {
                    console.log("Error");
                }

        } else {
            const errorMsg = { error: "Unsupported Media Type, JSON was expected" };
            const errorAsJSON = JSON.stringify(errorMsg)
            const failMsg = {
                status: 401,
                headers: { "Content-Type" : "text/html"}

            }
            
            return new Response(errorAsJSON, failMsg);
        }



    }

    return new Response(data, options);
}

serve(handler);