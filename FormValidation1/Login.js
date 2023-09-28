let form = document.querySelector("form")
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email = document.getElementById("email").value
    let pwd = document.getElementById("pwd").value

    //todo accessing value from localstorage
    // let email = localStorage.getItem("email");
    // let password = localStorage.getItem("password");
    //     if(email = userName  && pwd==password){
    //     alert("Login Successful")
    //     window.open("./Home.html");
    // }
    // else{
    //     alert("Login failed")
    // }

    //* accessing value from localstorage
    let user=JSON.parse(localStorage.getItem("users"))
    if(email = user.email  && pwd==user.pwd){
        alert("Login Successful")
        window.open("./Home.html");
    }
    else{
        alert("Login failed")
    }
  })
