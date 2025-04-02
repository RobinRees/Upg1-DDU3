const options = {
  method: "GET",
};

const request = new Request("http://localhost:4242/randomColor", options);

fetch(request)
  .then(x => x.text())
  .then(handleResource);

function handleResource (resource) {
  document.body.style.backgroundColor = resource;
  document.querySelector("#color").textContent = resource;
}

