let rqst = new Request("http://localhost:8000/die");

let x = fetch(rqst).then(response => response.text());

console.log("1")



x.then(response => {
    document.getElementById("button").addEventListener("click", function() {
        let span = document.getElementById("span");
        span.innerHTML = response;
    })
})