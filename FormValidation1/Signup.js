let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit",e=>{
    e.preventDefault();

    let user = document.getElementById("uName").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value
    let pwd = document.getElementById("pwd").value

    if(user=="" || email=="" || tel=="" || pwd==""){
        alert("Please provide your Credentials")
    }
    else{
        let users={
            userName:user,
            email:email,
            tel:tel,
            pwd:pwd
        }
        // localStorage.setItem("email",email)
        // localStorage.setItem("password", pwd)
        localStorage.setItem("users", JSON.stringify(users))
        alert("Registered Successfully..!!!")
        window.open("./Login.html")
        // window.navigator("./Login.html")
    }
})