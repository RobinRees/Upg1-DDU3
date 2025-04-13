const button = document.getElementById("button");
const request = new Request("http://localhost:8000/random");


button.addEventListener('click', function() {


    fetch(request).then(response => response.text()).then(data => {
        const number = parseInt(data);
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                document.body.style.backgroundColor = 'skyblue';
            } else {
                document.body.style.backgroundColor = 'tomato';
            }
        }
    })
});