const wrapper = document.querySelector(".wrapper")
const loginBtn = document.querySelector(".btnlogin-popup")

const registerLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")

const loginForm = document.querySelector("#loginForm")
const registerForm = document.querySelector("#registerForm")

const togglePassword = document.querySelector(".toggle-password")
const loginPassword = document.querySelector("#loginPassword")

const closeBtn = document.querySelector(".icon-close")


// popup open

loginBtn.onclick = () =>{
wrapper.classList.add("active-popup")
}

//close-button:
closeBtn.onclick = () =>{
wrapper.classList.remove("active-popup")
}


// register toggle

registerLink.onclick = () =>{
wrapper.classList.add("active")
}

// login toggle

loginLink.onclick = () =>{
wrapper.classList.remove("active")
}


// show hide password

togglePassword.onclick = () =>{

if(loginPassword.type === "password"){
loginPassword.type = "text"
togglePassword.setAttribute("name","eye-outline")
}
else{
loginPassword.type = "password"
togglePassword.setAttribute("name","eye-off-outline")
}

}


// REGISTER USER

registerForm.addEventListener("submit",(e)=>{

e.preventDefault()

const email = document.querySelector("#registerEmail").value
const password = document.querySelector("#registerPassword").value

localStorage.setItem("userEmail",email)
localStorage.setItem("userPassword",password)

alert("Registration Successful")

registerForm.reset()   // clears username, email, password fields

wrapper.classList.remove("active")

})



// LOGIN USER

loginForm.addEventListener("submit",(e)=>{

e.preventDefault()

const email = document.querySelector("#loginEmail").value
const password = document.querySelector("#loginPassword").value

const storedEmail = localStorage.getItem("userEmail")
const storedPassword = localStorage.getItem("userPassword")

if(email === storedEmail && password === storedPassword){

alert("Login Successful")

loginForm.reset()   // clears email & password fields

wrapper.classList.remove("active-popup")

setTimeout(()=>{
window.location.href="dashboard.html"
},300)

}
else{

wrapper.classList.add("shake")

setTimeout(()=>{
wrapper.classList.remove("shake")
},400)

alert("Invalid login")

}

})
const menuIcon = document.querySelector(".menu-icon")
const sidebar = document.querySelector(".sidebar")

menuIcon.onclick = () => {

if(sidebar.style.left === "0px"){
sidebar.style.left = "-250px"
}
else{
sidebar.style.left = "0px"
}

}
