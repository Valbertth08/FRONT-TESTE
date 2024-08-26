import { jwtDecode } from "../node_modules/jwt-decode/build/esm/index.js";
const formulario = document.querySelector("form");
const login= document.querySelector(".login")
const senha= document.querySelector(".senha")

function efetuarLogin(dados) {
    fetch("http://localhost:8080/usuario/login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(function (res) {
        if (!res.ok) {
            throw new Error('Erro ao efetuar login');
        }
        return res.json();
    })
    .then(function (data) {
        const code= jwtDecode(data.tokenJWT)
        localStorage.setItem('token', data.tokenJWT);
        localStorage.setItem('id',code.id); 
        window.location.href="../resposta/cadastrarResposta.html"  
    })
    .catch(function (error) {
        console.error("Erro:", error);
    });
}
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    const dados = { login: login.value,senha: senha.value }
    efetuarLogin(dados)
 
   

})