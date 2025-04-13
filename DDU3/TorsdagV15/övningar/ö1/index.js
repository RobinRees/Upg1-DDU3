const button = document.getElementById("button");


button.addEventListener("click", async function() {
  const url = "http://localhost:8000/?c1=hello&c2=world&c3=!";

  const response = await fetch(url);
  const text = await response.text();

  document.getElementById("svar").innerHTML = text;


})
