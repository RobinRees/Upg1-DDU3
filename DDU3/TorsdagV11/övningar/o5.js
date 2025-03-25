import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

async function handler (request) {
    const data = Deno.readTextFileSync("dogs.json");
    const filename = "dogs.json"
    const options = {
        headers: { "Content-Type" : "application/json"}
    };
    const contentType = request.headers.get("Content-Type");
    const dataToJS = JSON.parse(data)
    
    if (request.method === "PUT") {
        if (contentType === "application/json") {
            const requestDataToPut = await request.json();


            if (requestDataToPut.name != undefined &&
                requestDataToPut.breed != undefined &&
                requestDataToPut.age != undefined &&
                requestDataToPut.weight != undefined &&
                requestDataToPut.favorite_treats != undefined
            ) {
                if (dataToJS.some(x => x.name == requestDataToPut.name && x.breed == requestDataToPut.breed)) {
                    const indexOfDog = dataToJS.findIndex(x => x.name == requestDataToPut.name && x.breed == requestDataToPut.breed);
                    if (indexOfDog != -1) {
                        dataToJS.splice(indexOfDog, 1, requestDataToPut);
                        const JSONDogs = JSON.stringify(dataToJS, null, 2);
                        Deno.writeTextFileSync(filename, JSONDogs);
                    } else {
                        console.log("Index är -1");
                    }
                } else {
                    console.log("Hunden finns inte")
                }
            } else {
                console.log("Nycklar är undefined")
            }
        }
    }

    if (request.method === "DELETE") {
        if (contentType === "application/json") {
            const requestDataDelete = await request.json();


            // Jag vill gå igenom hela dataToJS och se om requestDataDelete finns, om det finns ska den ta bort HELA objektet vars namn jag försökt tabort.
            if (dataToJS.some(x => x.name === requestDataDelete.name)) {
                const filterArrayWithoutName = dataToJS.filter(x => x.name != requestDataDelete.name);
                console.log(filterArrayWithoutName);
                
                console.log(requestDataDelete.name)
                const newJSONafterDelete = JSON.stringify(filterArrayWithoutName, null, 2);
                Deno.writeTextFileSync(filename, newJSONafterDelete);
            } else {
                console.log("Error");
            }
        }

    }

    if (request.method === "POST") {

        if (contentType === "application/json") {
            const requestData = await request.json();

            
            if (requestData.name != undefined &&
                requestData.breed != undefined &&
                requestData.age != undefined &&
                requestData.weight != undefined &&
                requestData.favorite_treats != undefined) {

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