angular.module("listaTelefonica").filter("name", ()=>{
    return (input)=>{
        let listaNomes = input.split(" ");
        let listFormatada = listaNomes.map((nome)=>{
            if(/(da | de)/.test(nome))return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        })

        return listFormatada.join(" ");
    }
})