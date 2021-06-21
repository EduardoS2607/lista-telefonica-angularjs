angular.module("listaTelefonica").controller("novoContatoCtrl",function($scope,$location, contatosAPI,operadoras){
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = (contato)=>{
        contatosAPI.saveContato(contato).then(()=>{
            delete $scope.contato 
            $scope.contatoForm.$setPristine();
            $location.path("/contatos")
        },)
    };
});