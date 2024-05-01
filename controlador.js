const modelo = require("./modelo")

async function criarContato(nome, email, telefone){
    const contato = new modelo.contato(nome, email, telefone);
    const {id} = await modelo.inserir(contato);
    contato.id = id;
    return{...contato};
}
async function atualizarContato(nome, email, telefone){
    const contato = await consultarContato(nome);
    if (contato) {
    contato.email= email;
    contato.telefone = telefone;
    await modelo.alterar(contato);
}
    return {...contato};

}
async function consultarContato(nome){
    const contato = new modelo.contato(nome);
    const {id, email, telefone} = await modelo.consultar(contato);
    contato.id = id;
    contato.email = result.email;
    contato.telefone = result.telefone;
    return {...contato};
}
async function removerContato(nome){
    const contato = await consultarContato(nome);
    if (contato){
        modelo.deletar(contato);
    }
    return {...contato}
}

module.exports = {
    criarContato, 
    atualizarContato,
    consultarContato, 
    removerContato};