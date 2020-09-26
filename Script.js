let Name = "";
let Password = "";

function Verificy () {

    let NameValue = document.getElementById("N")
    let PasswordValue = document.getElementById("P")

    Name = NameValue.value;
    Password = PasswordValue.value;

    if ( Name !== "Barry Allen" || Password !== "senhatop.com") return window.alert("❌ • Email ou Senha Inválida...")
    else return window.alert("✅ • Dados Correto....");

}