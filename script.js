const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const ham = document.getElementById('mobile');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
        // ham.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

function Verify() {
    var userRef = "Cara@gmail.com";
    var passRef = "Cara123@";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
        location.href = "index.html";
    // alert("Connexion/")
    } else {
    alert("Wrong Password")
    }
  };