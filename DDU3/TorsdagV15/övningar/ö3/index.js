const registerButton = document.getElementById("registerButton")
const registerInputName = document.getElementById("registerInputName")
const registerInputPw = document.getElementById("registerInputPw")
const registerInputPwRepeat = document.getElementById("registerInputPwRepeat")

const loginButton = document.getElementById("loginButton")
const loginInputName = document.getElementById("loginInputName")
const loginInputPw = document.getElementById("loginInputPw")

const responseMessage = document.getElementById("textResponse")

registerButton.addEventListener("click", async function(){


    if (registerInputName.value != "" && registerInputPw.value != "" && registerInputPw.value === registerInputPwRepeat.value){
        const request = new Request("https://maumt.reipino.com/du3/servers/accounts/manage/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: `${registerInputName.value}`, password: `${registerInputPw.value}`})
        });
    
        (async function () {
            await fetch(request);
            let response = await fetch("https://maumt.reipino.com/du3/servers/accounts/");
            let accounts = await response.json();
            console.log(accounts);
        })();
    
    
        responseMessage.innerHTML = "Was registerd"


    } else {
        responseMessage.innerHTML = "Was not registered"
    }

})


loginButton.addEventListener("click", async function() {
    if (registerInputName.value != "" && registerInputPw != "") {


        const request = new Request("https://maumt.reipino.com/du3/servers/accounts/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: `${loginInputName.value}`, password: `${loginInputPw.value}`})
        });        


        const responsePromise = fetch(request);
        responsePromise.then(response => {
            if (response.status === 200) {
                responseMessage.innerHTML = "Du har loggat in";
            } else {
                responseMessage.innerHTML = "Ditt lösenord Funkar inte"
            }

        })



    } else {
        responseMessage.innerHTML = "Det funkar inte"
    }


})