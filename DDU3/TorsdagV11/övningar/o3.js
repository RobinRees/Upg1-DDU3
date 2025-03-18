import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

async function handler (request) {
    const data = Deno.readTextFileSync("dogs.json");
    const options = {
        headers: { "Content-Type" : "application/json"}
    };

    if (request.method === "POST") {
        const contentType = request.headers.get("Content-Type");

        let jsData = JSON.parse(data); // Gör om dogs.json från sträng till array.
        if (contentType === "application/json") {
            const requestData = await request.json();
            if ("name" in requestData &&
                "breed" in requestData &&
                "weight" in requestData &&
                "favorite-treats" in requestData
             ) {
                jsData.push(requestData);
                const updatedData = JSON.stringify(jsData);
                Deno.writeTextFileSync("dogs.json", updatedData);
                console.log(requestData);
             }



        } else {
            const errorMsg = { error: "Unsupported Media Type, JSON was expected" };
            const errorAsJSON = JSON.stringify(errorMsg)
            const failMsg = {
                status: 415
            }
            
            return new Response(errorAsJSON, failMsg);
        }



    }

    return new Response(data, options);
}

console.log("Servern körs på http://localhost:3000");
serve(handler);

/*         "name": "Buddy",
        "age": 10,
        "breed": "Poodle",
        "weight": 35.4,
        "favorite_treats": [*/