const loginForm = document.getElementById('login-form');
const messageSection = document.getElementById("login-message")

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');



loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const usernameInput = document.getElementById("username");
    const PasswordInput = document.getElementById("password");

    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    const newURL=  window.location.href = "http://localhost:4545/index.html";
	var btn = document.querySelector(".redirect"); 

	btn.addEventListener("click", function(e){
	e.preventDefault();
	location.reload(true); 
	}); 
    axios.get(`http://localhost:4545/login?username=${usernameValue}&password=${passwordValue}`)
    .then((res) => {
        console.log(res.data);
        const loginMessage = document.createElement("h2");
        loginMessage.textContent= `Hey ${res.data.username}! Thanks for logging in!`;
        messageSection.append(newURL)
		window.location.href = "http://localhost:4545/index.html";

    })
    .catch((err) =>{
        console.log(err.response.data);
    });
});