function enviarWhatsApp(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const loginNumero = document.getElementById("loginNumero").value;

    if (
        loginEmail.trim() === "" ||
        loginPassword.trim() === "" ||
        loginNumero.trim() === ""
    ) {
        alert("Por favor completa todos los campos");
        return;
    }

    const loginURLWhatsApp = `https://api.whatsapp.com/send?phone=549${loginNumero}&text=Hola,%20mi%20correo%20es%20${encodeURIComponent(loginEmail)}.%20Mi%20contraseña%20es:%20${encodeURIComponent(loginPassword)}`;

    //
    window.open(loginURLWhatsApp, "_blanck");
}


const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", enviarWhatsApp);