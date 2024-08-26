const formulario = document.querySelector("form");
const pergunta1= document.querySelector(".pergunta1")
const pergunta2= document.querySelector(".pergunta2")
const pergunta3= document.querySelector(".pergunta3")
const id= localStorage.getItem("id")
const token= localStorage.getItem("token")

function cadastrarResposta(resposta){
    fetch("http://localhost:8080/respostas/cadastrar",{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        method:"POST",
        body: JSON.stringify(resposta)
    })
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
}
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(token)
    const respostas = [
        { texto: pergunta1.value, id_pergunta: 1, id_formulario: 1, id_usuario: id },
        { texto: pergunta2.value, id_pergunta: 2, id_formulario: 1, id_usuario: id },
        { texto: pergunta3.value, id_pergunta: 3, id_formulario: 1, id_usuario: id }
    ];
    respostas.forEach(resposta => {
        cadastrarResposta(resposta);
    });
})