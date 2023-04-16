<<<<<<< HEAD
function Onload(){
    const form = document.querySelector(".form");
    //entradas
    let peso = form.querySelector(".peso");
    let altura = form.querySelector(".altura");
    const resultado = document.querySelector(".resultado");
    //VERIFICA EM QUE SITUAÇÃO O IMC APRESENTADO SE ENQUADRA
    function verificaIMC(valImc){
        if (valImc < 18.5){
            return 'Abaixo do peso'
        }else if(valImc <= 24.9){
            return 'Peso normal'
        }else if(valImc <=29.9){
            return 'Sobrepeso'
        }else if(valImc <= 34.9){
            return 'Obesidade grau 1'
        }else if(valImc <=39.9){
            return 'Obesidade grau 2'
        };
        return 'Obesidade grau 3'
    };

    //CALCULA O VALOR DO IMC E CHAMA O VERIFICADOR
    function calculaIMC(evento){
        evento.preventDefault();
        const imc = (parseFloat(peso.value)/parseFloat(altura.value)**2)
        peso.value = ''
        altura.value = ''
        resultado.innerHTML =`Seu IMC é ${imc.toFixed(2)} (${verificaIMC(imc)})` 
    };
    form.addEventListener('submit',calculaIMC)
    

}


Onload()
=======
function Onload(){
    const form = document.querySelector(".form");
    //entradas
    let peso = form.querySelector(".peso");
    let altura = form.querySelector(".altura");
    const resultado = document.querySelector(".resultado");
    //VERIFICA EM QUE SITUAÇÃO O IMC APRESENTADO SE ENQUADRA
    function verificaIMC(valImc){
        if (valImc < 18.5){
            return 'Abaixo do peso'
        }else if(valImc <= 24.9){
            return 'Peso normal'
        }else if(valImc <=29.9){
            return 'Sobrepeso'
        }else if(valImc <= 34.9){
            return 'Obesidade grau 1'
        }else if(valImc <=39.9){
            return 'Obesidade grau 2'
        };
        return 'Obesidade grau 3'
    };

    //CALCULA O VALOR DO IMC E CHAMA O VERIFICADOR
    function calculaIMC(evento){
        evento.preventDefault();
        const imc = (parseFloat(peso.value)/parseFloat(altura.value)**2)
        peso.value = ''
        altura.value = ''
        resultado.innerHTML =`Seu IMC é ${imc.toFixed(2)} (${verificaIMC(imc)})` 
    };
    form.addEventListener('submit',calculaIMC)
    

}


Onload()
>>>>>>> 4829debce955cd3978011a1b3d5ccb6e959be98e
