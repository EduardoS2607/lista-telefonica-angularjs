angular.module("listaTelefonica").filter("ellipsis" ,()=>{
    return (input,size)=>{

        if(input.length <=size) return input;
        let output = input.substring(0,(size || 10)) + "...";
        return output
    }
})