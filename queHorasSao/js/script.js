function Onload(){
    function pegAtual(){
        const data = new Date();
        return data.toLocaleTimeString('pt-BR',{hour12: false})
    };

    let horas =  document.querySelector('.horas')
    setInterval(function(){horas.innerHTML = pegAtual()},1000)
    
    
}
Onload()