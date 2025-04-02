import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
const dogRoute = new URLPattern({ pathname : "/dogs/:name"});

async function handler (request) {
    const data = Deno.readTextFileSync("dogs.json");
    const match = dogRoute.exec(request.url);
    const filename = "dogs.json"
    const options = {
        headers: { "Content-Type" : "application/json"}
    };
    const contentType = request.headers.get("Content-Type");
    const dataToJS = JSON.parse(data)

    const url = new URL(request.url);

    /*if (match) {
        const name = match.pathname.groups.name;
        const dog =  dataToJS.find(dog => dog.name.toLowerCase() === name.toLowerCase());

        if (dog) {
            return new Response(JSON.stringify(dog, null, 2), { status : 200});
        } else {
            return new Response("Dog not found", { status : 404});
        }
    }*/

    if (request.method === "PATCH") {
        if (match) {
            const name = match.pathname.groups.name;
            const dog = dataToJS.find(dog => dog.name.toLowerCase() === name.toLowerCase());

            if (dog) {
                console.log(dog);
                const newInfo = await request.json();


                if ("weight" in newInfo) {
                    dog.weight = newInfo.weight;
                }

                if ("age" in newInfo) {
                    dog.age = newInfo.age;
                }

                if ("favorite_treats" in newInfo) {
                    dog.favorite_treats = newInfo.favorite_treats;
                }
                console.log(newInfo);
                const JSONDogs = JSON.stringify(dataToJS, null, 2);
                Deno.writeTextFileSync(filename, JSONDogs)
                return new Response(JSONDogs);
            }
        } 
    }

    if (request.method === "GET") {
        if (url.pathname == "/dogs") {


            if (url.searchParams.get("age") == 7) {
                const filterDogsOfAge = dataToJS.filter(dog => dog.age == 7);
                const filteredDogsToJSON = JSON.stringify(filterDogsOfAge, null, 2);
                let response = new Response(filteredDogsToJSON);
                return response;
            }

            if (url.searchParams.get("treat") == "Cheese") {
                const filterDogsOfTreats = dataToJS.filter(dog => dog.favorite_treats == "Cheese");
                const filteredDogsToJSON = JSON.stringify(filterDogsOfTreats, null, 2);
                let response = new Response(filteredDogsToJSON);
                return response;
            }

            if (url.searchParams.get("age") == 5 && url.searchParams.get("treat") == "Cheese") {
                const filterDogsOfAges = dataToJS.filter(dog => dog.age == 5);
                const finterDogsOfCheese = filterDogsOfAges.filter(dog => dog.favorite_treats == "Cheese");
                const DogsAndCheeseToJSON = JSON.stringify(finterDogsOfCheese);

                console.log(DogsAndCheeseToJSON);
                let response = new Response(DogsAndCheeseToJSON);
                return response;
            }
        }



    }
    
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

        if (match) {
            const name = match.pathname.groups.name;
            console.log(match)
            console.log(match.pathname.groups.name)
            const dog = dataToJS.find(dog => dog.name.toLowerCase() == name.toLowerCase());

            if (dog) {
                const filteredDogs = dataToJS.filter(dog => dog.name.toLowerCase() != name.toLowerCase());
                const newJsonDogs = JSON.stringify(filteredDogs, null, 2);
                console.log(newJsonDogs);
                Deno.writeTextFileSync(filename, newJsonDogs)
                return new Response(newJsonDogs)
            } else {
                return new Response("Error", { status : 400});
            }
        }

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