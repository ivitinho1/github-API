import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"

import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"

//-- CRIANDO addEventListener PARA O BOTÃO E PEGAR O VALOR DIGITADO NO INPUT
document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

//--CRIANDO EVENTO PARA BUSCARMOS AO APERTARMOS NA TECLA "enter"
document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

//--VALIDANDO CASO USUARIO NÃO PREENCHA OS CAMPOS NECESSARIO--
function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('preencha o campo com o nome do usuário do Github')
        return true
    }
}

//--buscando dados do usuario,repositoios--
async function getUserData(userName){

    const userResponse = await getUser(userName)
    const RepositoriesResponse = await getRepositories(userName)

    if(userResponse.message === "Not Found"){
        screen. renderNotFound()
        return
    }
     
    user.setInfo(userResponse)
    user.setRepositories(RepositoriesResponse)

    screen.renderUser(user)
}


