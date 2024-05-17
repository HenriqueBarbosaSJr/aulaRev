const dados = {
    cod:635,
    nome:"Henrique",
    email:"henrique@gmail.com",
    uf:"RJ"
}

module.exports={

    async raiz(req, res){
        
        res.send('Aló, que está falando ?');
    },

    async clientes(req, res){

        res.send(dados);

    }




}