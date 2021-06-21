angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope, contatosAPI,contatos){
    $scope.app="Lista Telefonica";
    $scope.contatos = contatos.data;

    $scope.adicionarContato = (contato)=>{
        contatosAPI.saveContato(contato).then(()=>{
            delete $scope.contato 
            $scope.contatoForm.$setPristine();
            carregarContatos();
        },)
    };
    $scope.apagarContatos = (contatos)=>{
        $scope.contatos = contatos.filter((contato)=>{
            if(!contato.selecionado) return contato;
        });
    };

    $scope.ordenarPor = (campo)=>{
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
});