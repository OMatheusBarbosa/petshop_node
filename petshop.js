let listaDePets = ["Dudu", "Theo", "Mikéáá"];

function addPet(nome){
    listaDePets.push(nome);
    return "Pet cadastrado com sucesso!!!";
}

function listarPet(){
    let lista = "";
    
    listaDePets.forEach(function(pet){
        //lista += "---------------------------\nNome do Pet: " + listaDePets[i] + "\n"

        lista += `
            ---------------------------\n
            Nome do Pet: ${pet}\n
            `
    });

    return lista;
}

module.exports = {addPet, listarPet};