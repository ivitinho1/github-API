import { baseUrl } from "/src/scripts/variables.js"

// --FUNÇÃO QUE NOS RETORNA OS DADOS DO USUARIO--
async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }
