angular.module("listaTelefonica").directive("uiCep", function(){
    return{
        require: "ngModel",
        link: function(scope, element,attrs, ctrl){
            let _formatCep = (cep)=>{
                cep = cep.replace(/[^0-9]+/g,"");
                if(cep.length > 5)cep = cep.substring(0,5)+ "-" + cep.substring(5,8);
                console.log(cep);
                    return cep;
            }
            element.bind("keyup",()=>{
                ctrl.$setViewValue(_formatCep(ctrl.$viewValue));
                ctrl.$render(); 
            })
        }
    }
})