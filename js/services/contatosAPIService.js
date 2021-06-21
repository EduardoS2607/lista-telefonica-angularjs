angular.module("listaTelefonica").factory("contatosAPI", ($http,config)=>{
    let _getContatos = ()=>{
        return $http.get(config.baseUrl + "/contatos");
    };
    let _getContato = (id)=>{
        return $http.get(config.baseUrl + "/contatos/" + id);
    };
    let _saveContato = (contato)=>{
        return $http.post(config.baseUrl + "/contatos",contato);
    };
    return {
        getContatos: _getContatos,
        saveContato: _saveContato,
        getContato: _getContato,
    };
})