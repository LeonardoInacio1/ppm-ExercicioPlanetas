var botaoCalcular = document.getElementById("calculo");
var botaoCancelar = document.getElementById("cancelar");
//var resultado = parseFloat(document.getElementById("resultado"));

botaoCalcular.addEventListener("click", function(){    
    var peso = parseFloat(document.getElementById("peso").value);
    var a = document.getElementById("comboPlaneta");
    var comboPlaneta = a.options[a.selectedIndex].value;
    var p;

    if(comboPlaneta == "mercurio"){
       p= ((peso/10)*0.37);
       alert("Seu peso é: " + p.toFixed(2));
     
    } else if(comboPlaneta == "venus"){
        p= ((peso/10)*0.88);
        alert("Seu peso é: " + p.toFixed(2));
    } else if(comboPlaneta == "marte"){
        p= ((peso/10)*0.38);
        alert("Seu peso é: " + p.toFixed(2));
    } else if(comboPlaneta == "jupiter"){
        p= ((peso/10)*2.64);
        alert("Seu peso é: " + p.toFixed(2));
    } else if(comboPlaneta == "saturno"){
        p= ((peso/10)*1.15);
        alert("Seu peso é: " + p.toFixed(2));
    } else if(comboPlaneta == "urano"){
        p= ((peso/10)*1.17);
        alert("Seu peso é: " + p.toFixed(2));
    }    

});

botaoCancelar.addEventListener("click", function(){
    
})

