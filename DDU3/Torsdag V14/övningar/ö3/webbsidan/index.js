let rqst = new Request("http://localhost:8000/randomStatus");

let x = fetch(rqst);

console.log("1")



x.then(response => {
    document.body.innerHTML = `${response.statusText}`
})